import RoleComponent from "./RoleComponent";

export default function Navbar() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">

      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
        <h1 className="text-xl md:text-2xl font-bold text-gray-500">
          FinanceTrack
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
          Dashboard
        </h2>
      </div>

      <div className="flex justify-end">
        <RoleComponent />
      </div>

    </div>
  );
}