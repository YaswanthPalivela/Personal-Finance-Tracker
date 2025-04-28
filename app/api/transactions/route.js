// app/api/transactions/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { Transaction } from '@/lib/models';

export async function GET() {
  await connectDB();
  const transactions = await Transaction.find().sort({ date: -1 });
  return NextResponse.json(transactions);
}

export async function POST(req) {
  await connectDB();
  const { type, amount, category, date } = await req.json();
  const transaction = await Transaction.create({ type, amount, category, date });
  return NextResponse.json(transaction);
}
