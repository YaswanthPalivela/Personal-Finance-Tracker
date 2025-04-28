// app/api/budgets/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { Budget } from '@/lib/models';

export async function GET() {
  await connectDB();
  const budgets = await Budget.find();
  return NextResponse.json(budgets);
}

export async function POST(req) {
  await connectDB();
  const { month, amount } = await req.json();
  const budget = await Budget.create({ month, amount });
  return NextResponse.json(budget);
}
