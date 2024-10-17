import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const apiKey = process.env.RENTCAST_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'API key is missing.' }, { status: 500 });
  }

  const { searchParams } = new URL(request.url);
  const state = searchParams.get('state');
  const city = searchParams.get('city');
  const radius = searchParams.get('radius') || '30';
  const zipCode = searchParams.get('zipCode');
  const propertyType = searchParams.get('propertyType') || '';
  const bedrooms = searchParams.get('bedrooms') || '';
  const bathrooms = searchParams.get('bathrooms') || '';
  const resultLimits = searchParams.get('resultLimits') || '100';

  if (!state && !zipCode) {
    return NextResponse.json({ error: 'State or ZipCode is required.' }, { status: 400 });
  }
  if (!city && !zipCode) {
    return NextResponse.json({ error: 'City or ZipCode is required.' }, { status: 400 });
  }

  try {
    const apiUrl = `https://api.rentcast.io/v1/listings/rental/long-term?` +
      `city=${city}&state=${state}&radius=${radius}&zipCode=${zipCode}` +
      `&propertyType=${propertyType}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&limit=${resultLimits}`;

    const response = await fetch(apiUrl, {
      headers: {
        'accept': 'application/json',
        'X-Api-Key': apiKey
      }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
    }
  }
}
