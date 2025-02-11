// write apis for assesments for next api with request and response

import { NextRequest, NextResponse } from 'next/server';
import { getAssesmentsByStudentIdService } from './assesser.service';
// featch all assesments by student id
export async function getAssesmentsByStudentId(req: NextRequest) {
  try {
    const studentId = req.nextUrl.searchParams.get('studentId');
    if (!studentId) {
      return NextResponse.json({ error: 'Student ID is required' }, { status: 400 });
    }
    const assesments = await getAssesmentsByStudentIdService(studentId);
    return NextResponse.json(assesments);
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
