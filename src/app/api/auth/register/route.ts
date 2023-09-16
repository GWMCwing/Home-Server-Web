import { CreateUserResponse } from '@/types/api/auth';
import { apiAxios } from '@/utility/axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const res = await apiAxios.post<any, CreateUserResponse>('/auth/createUser', body).catch((err) => {
    console.error(err);
    return {};
  });
  return NextResponse.json(res);
}
