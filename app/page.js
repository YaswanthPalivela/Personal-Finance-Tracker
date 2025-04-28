'use client';

import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer as PieResponsiveContainer } from 'recharts';
import ExpenseCategoryChart from '../components/ExpenseCategoryChart';

const COLORS = ['#00C49F', '#FF8042'];

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('/api/transactions')
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const pieData = [
    { name: 'Income', value: income },
    { name: 'Expense', value: expense },
  ];

  const barData = [
    { name: 'Income', amount: income },
    { name: 'Expense', amount: expense },
  ];

  return (
    <div className="max-w-full bg-slate-900 flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-8">Personal Finance Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-center">Income vs Expense (%)</h2>
          <div className="w-full h-80">
            <PieResponsiveContainer>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                  animationBegin={0}
                  animationDuration={1500}
                  isAnimationActive={true}
                >
                  {pieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </PieResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
        <ExpenseCategoryChart />
    </div>
    </div>
    <div className="mt-8 space-x-4 text-lg">
        <span className="font-semibold">Total Income: ${income}</span>
        <span className="font-semibold">Total Expense: ${expense}</span>
      </div>
    </div>
)
}
