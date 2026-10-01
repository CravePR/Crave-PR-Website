import { NextRequest, NextResponse } from 'next/server'

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

  const res = await fetch(
    `https://emailoctopus.com/api/1.6/lists/${listId}/contacts`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: apiKey,
        email_address: email,
        fields: { FirstName: firstName ?? '' },
        tags: [tag],
        status: 'SUBSCRIBED',
      }),
    }
  )

  const data = await res.json()

  if (!res.ok) {
    // EmailOctopus returns a specific error code for already-subscribed contacts
    const code = data?.error?.code
    if (code === 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS') {
      return NextResponse.json({ ok: true })
    }
    console.error('EmailOctopus error:', data)
    return NextResponse.json({ error: 'Subscription failed.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
