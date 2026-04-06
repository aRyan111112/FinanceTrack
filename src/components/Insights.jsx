import { useSelector } from 'react-redux';

export default function Insights() {
  const { list } = useSelector((state) => state.transactions);

  const income = list
    .filter((t) => t.type === 'income')
    .reduce((a, b) => a + b.amount, 0);

  const expense = list
    .filter((t) => t.type === 'expense')
    .reduce((a, b) => a + Math.abs(b.amount), 0);

  const savings = income - expense;

  const categoryTotals = {};
  list.forEach((t) => {
    if (t.type === 'expense') {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + Math.abs(t.amount);
    }
  });

  const highest = Object.keys(categoryTotals).reduce(
    (a, b) => (categoryTotals[a] > categoryTotals[b] ? a : b),
    ''
  );

  return (
    <div
    className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-md transition p-4 mt-2">
      <p className="font-semibold text-gray-700 dark:text-gray-300 mb-3 text-lg">Insights</p>

      <ul 
      className="text-gray-500 dark:text-gray-400 space-y-2 font-semibold font-mono">
        <li>💡 Highest spending: {highest || 'N/A'}</li>
        <li>💰 Total Income: ₹{income}</li>
        <li>💸 Total Expenses: ₹{expense}</li>
        <li>📈 Savings: ₹{savings}</li>
      </ul>
    </div>
  );
}