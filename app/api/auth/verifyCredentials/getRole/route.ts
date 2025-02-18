import { getUsersModel } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  //
  // create url
  const url = new URL(req.url);
  const username = url.searchParams.get('email');

  // call db and check
  const Users = await getUsersModel();
  const user = await Users.findOne({ email: username });

  if (user) {
    return NextResponse.json({ role: user.role, success: true });
  } else {
    return NextResponse.json({ error: 'UnknownAction' }, { status: 400 });
  }
}
