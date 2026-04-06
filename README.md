FinanceTrack Dashboard
A clean, interactive, and responsive finance management interface built to help users track spending, visualize financial trends, and gain actionable insights into their habits.

🚀 Overview
FinanceTrack is a frontend-focused application designed to demonstrate modern UI/UX practices, efficient state management, and basic Role-Based Access Control (RBAC). It provides a high-level summary of financial health while allowing for granular transaction management.

🛠️ Tech Stack
Framework: React.js (Vite)

Styling: Tailwind CSS (for responsive, utility-first design)

State Management: [Insert your choice, e.g., React Context API / Zustand]

Data Visualization: [Insert your choice, e.g., Recharts / Chart.js]

Icons: Lucide-React

✨ Key Features
1. Financial Summary & Visualizations
KPI Cards: Real-time display of Total Balance, Income, and Expenses.

Time-Based Trend: An Area Chart visualizing balance fluctuations over time.

Category Breakdown: A Donut/Pie chart highlighting spending distribution across categories (Food, Rent, Entertainment, etc.).

2. Transaction Management
Live Search: Filter transactions by merchant or category name.

Status Filtering: Toggle between "Income" and "Expense" views.

Dynamic Sorting: View transactions by date or amount.

3. Role-Based UI (RBAC)
The application simulates two distinct user permissions to demonstrate UI adaptability:

Viewer: Read-only access. Can view all charts and transaction lists but cannot modify data.

Admin: Full access. Enables "Add Transaction" and "Edit/Delete" actions within the interface.

How to test: Use the role toggle located in the [Sidebar/Topbar] to switch perspectives instantly.

4. Smart Insights
The dashboard automatically analyzes mock data to provide:

Top Spending Category: Identifies where the most money is going.

Monthly Comparison: A quick look at how current spending compares to previous periods.

📱 Responsiveness
The dashboard is fully responsive.

Desktop: Sidebar navigation with a multi-column grid layout.

Mobile: Collapsible mobile menu and stacked data cards for optimal readability on small screens.

⚙️ Installation & Setup
Clone the repository:

Bash
git clone https://github.com/aRyan111112/FinanceTrack.git
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
🧠 Architectural Decisions
State Management: I chose [State Manager] to handle transaction filtering and role switching globally, ensuring a single source of truth without unnecessary re-renders.

Modular Components: The UI is broken into reusable components (e.g., StatCard, TransactionRow, ChartContainer) to ensure the code is scalable and easy to maintain.

Mock Data: Data is handled through a structured JSON mock file to simulate a real-world API response.