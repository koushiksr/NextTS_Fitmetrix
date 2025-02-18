import { getUsersModel } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // get username and password
  const { username, password } = await req.json();

  // call db and check
  const Users = await getUsersModel();
  const user = await Users.findOne({ email: username });
  console.log('user: ', user);

  if (user && user.password === password) {
    return NextResponse.json({ ...user, success: true });
  } else {
    return NextResponse.json({ error: 'UnknownAction' }, { status: 400 });
  }
}
