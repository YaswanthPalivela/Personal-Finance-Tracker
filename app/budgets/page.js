"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Budgets() {
  const [budgets, setBudgets] = useState([]);
  const [form, setForm] = useState({ category: "", limit: "", month: "" });

  useEffect(() => {
    fetchBudgets();
  }, []);

  async function fetchBudgets() {
    const res = await fetch("/api/budgets");
    const data = await res.json();
    setBudgets(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("/api/budgets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ category: "", limit: "", month: "" });
    fetchBudgets();
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <main className="p-8 bg-slate-900 h-screen text-white font-semibold rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Budgets</h1>

      <form onSubmit={handleSubmit} className="grid gap-4 max-w-md mb-8">
        <Input name="category" value={form.category} onChange={handleChange} placeholder="Category" required />
        <Input name="limit" value={form.limit} onChange={handleChange} placeholder="Limit" type="number" required />
        <Input name="month" value={form.month} onChange={handleChange} placeholder="Month (e.g. April)" required />
        <Button type="submit" className=" p-2 text-lg font-semibold">Set Budget</Button>
      </form>

      <div className="grid gap-4">
        {budgets.map((b) => (
          <Card key={b._id}>
            <CardContent>
              <p className="font-semibold">{b.category}</p>
              <p>Limit: ${b.limit}</p>
              <p className="text-gray-500 text-sm">Month: {b.month}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
