import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../store/slices/transactionSlice';

export default function AddTransactionModal({ onClose }) {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    date: '',
    category: '',
    amount: '',
    type: 'expense',
  });

  const handleSubmit = () => {
    if (!form.date || !form.category || !form.amount) return;

    dispatch(
      addTransaction({
        id: Date.now(),
        ...form,
        amount:
          form.type === 'expense'
            ? -Math.abs(Number(form.amount))
            : Number(form.amount),
      })
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-80 space-y-3">
        <h2 className="text-lg font-semibold">Add Transaction</h2>

        <input
          type="date"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <input
          placeholder="Category"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <input
          type="number"
          placeholder="Amount"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />

        <select
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <div className="flex justify-end gap-2">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={handleSubmit}
            className="bg-indigo-500 text-white px-3 py-1 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
