// lib/models.js
import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  type: { type: String, enum: ['income', 'expense'], required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const BudgetSchema = new mongoose.Schema({
  month: { type: String, required: true },
  amount: { type: Number, required: true },
});

export const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);
export const Budget = mongoose.models.Budget || mongoose.model('Budget', BudgetSchema);
