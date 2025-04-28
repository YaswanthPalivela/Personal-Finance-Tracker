'use client';

import { useState } from 'react';

export default function AddTransaction({ onAdd }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState('');

  const categories = [
    'Food',
    'Shopping',
    'Lifestyle',
    'Bills',
    'Travel',
    'Health',
    'Entertainment',
    'Groceries',
    'Utilities',
    'Other'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !amount || !category || !type || !date) {
      alert('Please fill in all fields.');
      return;
    }

    const transaction = {
      name,
      amount: parseFloat(amount),
      type,
      category,
      date,
    };

    const res = await fetch('/api/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transaction),
    });

    if (res.ok) {
      setName('');
      setAmount('');
      setCategory('Food');
      setType('expense');
      setDate('');
      if (onAdd) {
        onAdd();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800 p-6 rounded-lg space-y-4 shadow-md">
      <h2 className="text-2xl font-bold text-white mb-4">Add Transaction</h2>

      <div className="flex flex-col space-y-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Transaction name"
          className="p-2 rounded bg-slate-700 text-white"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="p-2 rounded bg-slate-700 text-white"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2 rounded bg-slate-700 text-white"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded bg-slate-700 text-white"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* NEW: Date Input */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 rounded bg-slate-700 text-white"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white font-semibold py-2 px-4 rounded"
        >
          Add Transaction
        </button>
      </div>
    </form>
  );
}
