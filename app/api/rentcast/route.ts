import { NextResponse } from 'next/server';
import { fetchPropertyData } from '../../lib/fetchPropertyData';

export async function GET() {
  try {
    const data = await fetchPropertyData();
    return NextResponse.json(data); // Send the data as a JSON response
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch property data' }, { status: 500 });
  }
}
