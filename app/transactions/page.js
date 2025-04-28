// app/transactions/page.js
'use client';

import { useEffect, useState } from 'react';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('/api/transactions')
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <div className='bg-gray-900 text-white font-semibold rounded-xl p-4'>
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <div className="space-y-4">
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <div key={transaction._id} className="p-4 border rounded shadow">
              <p><strong className=' text-white'>Type:</strong> {transaction.type}</p>
              <p><strong>Amount:</strong> ${transaction.amount}</p>
              <p><strong>Category:</strong> {transaction.category}</p>
              <p><strong>Date:</strong> {new Date(transaction.date).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          <p>No transactions found.</p>
        )}
      </div>
    </div>
  );
}
