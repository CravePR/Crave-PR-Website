import { createHash } from 'crypto'
import { NextRequest, NextResponse } from 'next/server'

// EmailOctopus API v2 — https://emailoctopus.com/api-documentation/v2
const EMAILOCTOPUS_API = 'https://api.emailoctopus.com'

type EmailOctopusReply = {
  ok: boolean
  status: number
  data: { title?: string; detail?: string; errors?: unknown } | null
  text: string
}

// Calls EmailOctopus and reads the reply as text first, only parsing it if it's actually JSON
async function callEmailOctopus(
  apiKey: string,
  method: string,
  path: string,
  body: unknown
): Promise<EmailOctopusReply> {
  const res = await fetch(`${EMAILOCTOPUS_API}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  })

  const text = await res.text()
  let data: EmailOctopusReply['data'] = null
  if (res.headers.get('content-type')?.includes('json')) {
    try {
      data = JSON.parse(text)
    } catch {
      data = null
    }
  }
  return { ok: res.ok, status: res.status, data, text }
}

function logError(reply: EmailOctopusReply) {
  if (reply.data) {
    console.error(
      `EmailOctopus error ${reply.status}: ${reply.data.title ?? ''} ${reply.data.detail ?? ''}`,
      reply.data.errors ?? ''
    )
  } else {
    console.error(`EmailOctopus error ${reply.status}: non-JSON reply`, reply.text.slice(0, 200))
  }
}

export async function POST(req: NextRequest) {
  const { firstName, email, listType } = await req.json()

  if (!email || !listType) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const apiKey = process.env.EMAILOCTOPUS_API_KEY
  const listId =
    listType === 'newsletter'
      ? process.env.EMAILOCTOPUS_NEWSLETTER_LIST_ID
      : process.env.EMAILOCTOPUS_CRAVE_NEWS_LIST_ID

  if (!apiKey || !listId) {
    console.error('EmailOctopus env vars not configured.')
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
  }

  const tag = listType === 'newsletter' ? 'Off the Record' : 'Crave News Network'
  const contactsPath = `/lists/${encodeURIComponent(listId)}/contacts`

  // Only send FirstName when provided, so an existing contact's name isn't blanked out
  const fields: Record<string, string> = {}
  if (firstName) fields.FirstName = firstName

  let reply: EmailOctopusReply
  try {
    // New contacts start as "pending", which makes EmailOctopus send its confirmation email
    reply = await callEmailOctopus(apiKey, 'POST', contactsPath, {
      email_address: email,
      fields,
      tags: [tag],
      status: 'pending',
    })

    // Already on the list: add the new tag only. Status is left out so a subscribed
    // contact stays subscribed, and other tags are untouched.
    if (reply.status === 409) {
      const contactId = createHash('md5').update(String(email).trim().toLowerCase()).digest('hex')
      reply = await callEmailOctopus(apiKey, 'PUT', `${contactsPath}/${contactId}`, {
        ...(firstName ? { fields } : {}),
        tags: { [tag]: true },
      })
    }
  } catch (err) {
    console.error('EmailOctopus request failed:', err)
    return NextResponse.json({ error: 'Could not reach the mailing list service.' }, { status: 502 })
  }

  if (!reply.ok) {
    logError(reply)
    if (reply.status === 400 || reply.status === 422) {
      return NextResponse.json(
        { error: 'Please check your email address and try again.' },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: 'Subscription failed. Please try again later.' },
      { status: reply.status >= 500 ? 502 : 500 }
    )
  }

  return NextResponse.json({ ok: true })
}
