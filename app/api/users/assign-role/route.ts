import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import User from '@/models/user';

export async function POST(req: Request) {
  try {
    await connectDB(); // Ensure DB is connected

    const { email, role } = await req.json();

    // Validate role
    const validRoles = ['admin', 'school', 'assessor', 'student', 'adult'];
    if (!validRoles.includes(role)) {
      return NextResponse.json({ error: 'Invalid role' }, { status: 400 });
    }

    // Update user's role manually
    const user = await User.findOneAndUpdate({ email }, { role }, { new: true });

    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

    return NextResponse.json({ message: 'Role updated successfully', user });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
