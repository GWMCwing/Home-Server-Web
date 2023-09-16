'use client';
import { CreateUserRequest } from '@/types/api/auth';
import { useState, Dispatch, SetStateAction, ChangeEvent, use, FormEvent } from 'react';

export default function RegisterForm({ nonce }: { nonce: string }) {
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChange = (callback: Dispatch<SetStateAction<string>>) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      callback(e.target.value);
    };
  };

  async function register(e: FormEvent) {
    //
    e.preventDefault();
    const body: CreateUserRequest = {
      userName: userName,
      email: email,
      password: password,
      nonce: nonce,
    };
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  }

  return (
    <form onSubmit={register}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" defaultValue={''} onChange={onChange(setUsername)} />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" defaultValue={''} onChange={onChange(setEmail)} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" defaultValue={''} onChange={onChange(setPassword)} />
      <input type="hidden" name="nonce" value={nonce} />
      <button type="submit">Submit</button>
    </form>
  );
}
