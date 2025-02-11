import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectToDatabase } from '@/lib/mongodb';
import User from '@/models/user';

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { name, email, password, googleId } = await req.json();

    if (!name || !email || !password) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });

    const existingUser = await User.findOne({ email });
    if (existingUser) return NextResponse.json({ error: 'Email already in use' }, { status: 400 });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, googleId });

    await newUser.save();
    return NextResponse.json({ message: 'User registered' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
