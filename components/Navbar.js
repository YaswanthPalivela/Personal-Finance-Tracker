// components/Navbar.js
'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-slate-900 text-white text-lg font-bold">
      <h1 className="text-lg font-bold">Finance <span className='text-blue-500 text-2xl'>Tracker</span></h1>
      <div className="space-x-4">
        <Link href="/" className=' hover:text-blue-400'>Dashboard</Link>
        <Link href="/add"className=' hover:text-blue-400'>Add Transaction</Link>
        <Link href="/transactions"className=' hover:text-blue-400'>Transactions</Link>
        <Link href="/budgets"className=' hover:text-blue-400'>Budgets</Link>
      </div>
    </nav>
  );
}
