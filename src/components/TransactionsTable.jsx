import { useSelector, useDispatch } from 'react-redux';
import { deleteTransaction } from '../store/slices/transactionSlice';
import { useState } from 'react';
import AddTransactionModal from './AddTransactionModal';
import Filters from './Filters';

export default function TransactionsTable() {
    const [open, setOpen] = useState(false);
    const { list } = useSelector((state) => state.transactions);
    const { role, search, filterType } = useSelector((state) => state.ui);
    const dispatch = useDispatch();

    const filtered = list.filter(
        (t) =>
            t.category.toLowerCase().includes(search.toLowerCase()) &&
            (filterType === 'all' || t.type === filterType)
    );

    const handleExport = () => {
        if (filtered.length === 0) return;

        const headers = ['Date', 'Category', 'Amount', 'Type'];

        const rows = filtered.map((t) => [t.date, t.category, t.amount, t.type]);

        const csvContent = [headers, ...rows]
            .map((row) => row.join(','))
            .join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'transactions.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-4 md:p-6">

    {/* HEADER */}
    <div className="mb-4">

      {/* Title + Buttons */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">

        <p className="font-semibold text-gray-700 dark:text-gray-300 text-lg">
          Transactions
        </p>

        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">

          <button
            onClick={handleExport}
            className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition"
          >
            Export CSV
          </button>

          {role === 'admin' && (
            <button
              onClick={() => setOpen(true)}
              className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition"
            >
              Add
            </button>
          )}

        </div>
      </div>

      {/* Filters */}
      <Filters />
    </div>

    {/* EMPTY STATE */}
    {filtered.length === 0 ? (
      <p className="text-center py-5 text-gray-500">
        No transactions found 📭
      </p>
    ) : (

      /* TABLE WRAPPER (IMPORTANT) */
      <div className="overflow-x-auto">

        <div className="min-w-[600px] rounded-2xl shadow-xl p-4 bg-slate-900/50 border border-white/5 backdrop-blur-sm">

          <table className="w-full text-sm">

            {/* HEADER */}
            <thead className="text-gray-400 uppercase text-xs tracking-wider">
              <tr className="border-b">

                <th className="py-2 text-left">Date</th>
                <th className="py-2 text-left">Category</th>
                <th className="py-2 text-left">Amount</th>
                <th className="py-2 text-left">Type</th>

                {role === 'admin' && (
                  <th className="py-2 text-left">Actions</th>
                )}

              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {filtered.map((t) => (
                <tr
                  key={t.id}
                  className="border-b hover:bg-gray-50 dark:hover:bg-gray-800 transition text-gray-600 dark:text-gray-300"
                >
                  <td className="py-2">{t.date}</td>
                  <td className="py-2">{t.category}</td>

                  <td
                    className={`py-2 font-medium ${
                      t.type === "income"
                        ? "text-emerald-400"
                        : "text-rose-400"
                    }`}
                  >
                    ₹{t.amount}
                  </td>

                  <td className="py-2 capitalize">{t.type}</td>

                  {role === 'admin' && (
                    <td className="py-2">
                      <button
                        onClick={() => dispatch(deleteTransaction(t.id))}
                        className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900 transition"
                      >
                        <span className="text-red-500">🗑️</span>
                      </button>
                    </td>
                  )}

                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>
    )}

    {/* MODAL */}
    {open && <AddTransactionModal onClose={() => setOpen(false)} />}
  </div>
);
}
