'use client';

import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS = [
  '#FF6384', // Red
  '#36A2EB', // Blue
  '#FFCE56', // Yellow
  '#4BC0C0', // Teal
  '#9966FF', // Purple
  '#FF9F40', // Orange
  '#00C49F', // Green
  '#FF8042', // Coral
];

// Map category name -> emoji
const CATEGORY_ICONS = {
  Food: '🍔',
  Shopping: '🛍️',
  Lifestyle: '🧘‍♂️',
  Bills: '💡',
  Travel: '✈️',
  Health: '🏥',
  Other: '📦',
};

export default function ExpenseCategoryChart() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('/api/transactions')
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  // Step 1: Filter expenses
  const expenses = transactions.filter((t) => t.type === 'expense');

  // Step 2: Group by category
  const categoryMap = {};

  expenses.forEach((expense) => {
    if (categoryMap[expense.category]) {
      categoryMap[expense.category] += expense.amount;
    } else {
      categoryMap[expense.category] = expense.amount;
    }
  });

  const totalExpense = expenses.reduce((sum, t) => sum + t.amount, 0);

  const categoryData = Object.keys(categoryMap).map((category) => ({
    category,
    label: `${CATEGORY_ICONS[category] || '📦'} ${category}`, // use icon if available
    amount: categoryMap[category],
    percent: ((categoryMap[category] / totalExpense) * 100).toFixed(1),
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
      <h2 className="text-2xl font-semibold mb-4 text-center">Expenses by Category</h2>
      <div className="w-full h-80">
        <ResponsiveContainer>
          <BarChart data={categoryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="label" 
              tick={{ fontSize: 12 }} 
              interval={0} 
            />
            <YAxis />
            <Tooltip 
              formatter={(value, name, props) => [`$${value} (${props.payload.percent}%)`, "Amount"]}
            />
            <Bar 
              dataKey="amount" 
              animationDuration={1500} 
              barSize={50}
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
