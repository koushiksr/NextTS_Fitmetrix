import { connectToDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const users = await db.collection('users').find().toArray();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { name, email, role } = await request.json();
  const { db } = await connectToDatabase();
  await db.collection('users').insertOne({ name, email, role });
  return NextResponse.json({ message: 'User created' }, { status: 201 });
}
