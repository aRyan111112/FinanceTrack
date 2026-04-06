import { useSelector } from 'react-redux';
import Card from './Card';

export default function SummaryCards() {
  const { list } = useSelector((state) => state.transactions);

  const income = list
    .filter((t) => t.type === 'income')
    .reduce((a, b) => a + b.amount, 0);

  const expense = list
    .filter((t) => t.type === 'expense')
    .reduce((a, b) => a + Math.abs(b.amount), 0);

  const balance = income - expense;

  return (
    <div className="grid md:grid-cols-3 gap-4 mb-6">
      <Card title="Balance" value={balance} />
      <Card title="Income" value={income} color="green" />
      <Card title="Expenses" value={expense} color="red" />
    </div>
  );
}


