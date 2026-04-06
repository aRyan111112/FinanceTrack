import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import { useSelector } from 'react-redux';

export default function ChartsSection() {
  const { list } = useSelector((state) => state.transactions);

  let balance = 0;
  const lineData = list.map((t) => {
    balance += t.amount;
    return {
      date: t.date,
      balance,
    };
  });

  const expenseMap = {};
  list.forEach((t) => {
    if (t.type === 'expense') {
      expenseMap[t.category] =
        (expenseMap[t.category] || 0) + Math.abs(t.amount);
    }
  });

  const expenseData = Object.keys(expenseMap).map((key) => ({
    name: key,
    value: expenseMap[key],
  }));

  const incomeMap = {};
  list.forEach((t) => {
    if (t.type === 'income') {
      incomeMap[t.category] = (incomeMap[t.category] || 0) + t.amount;
    }
  });

  const incomeData = Object.keys(incomeMap).map((key) => ({
    name: key,
    value: incomeMap[key],
  }));

  const COLORS = ['#6366f1', '#22c55e', '#f59e0b', '#ef4444', '#14b8a6'];

  return (
    <div className="space-y-6 mb-6">
      {/* line chart */}
      <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
        <p className="font-semibold text-gray-300 mb-3">Balance Trend</p>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#6366f1"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* pie chart - spending*/}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
          <p className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Expense Breakdown</p>

          {expenseData.length === 0 ? (
            <div className='flex justify-center'>
              <p className="font-semibold text-gray-700 dark:text-gray-300 mb-3">No expense data</p>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={expenseData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                >
                  {expenseData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* pie chart - income */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
          <p className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Income Breakdown</p>

          {incomeData.length === 0 ? (
            <div className='flex justify-center'>
              <p className="text-sm text-gray-400">No income data</p>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={incomeData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                >
                  {incomeData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}
