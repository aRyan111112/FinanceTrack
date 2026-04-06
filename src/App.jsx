import Sidebar from './components/RoleComponent.jsx';
import Navbar from './components/Navbar.jsx';
import SummaryCards from './components/SummaryCards';
import ChartsSection from './components/ChartsSection';
import Filters from './components/Filters';
import TransactionsTable from './components/TransactionsTable';
import Insights from './components/Insights';

export default function App() {
  return (
    <div
    className="flex h-screen bg-gray-800">

      <div className="flex-1 p-6 overflow-y-auto">
        <Navbar />
        <SummaryCards />
        <ChartsSection />
        <TransactionsTable />
        <Insights />
      </div>
    </div>
  );
}