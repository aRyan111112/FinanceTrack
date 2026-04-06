export default function Card({ title, value, color }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
      <p className="text-sm text-gray-400 font-semibold">{title}</p>

      <h3
        className={`text-2xl font-bold mt-1 ${
          color === "green"
            ? "text-green-500"
            : color === "red"
            ? "text-red-500"
            : "text-indigo-500"
        }`}
      >
        ₹{value}
      </h3>
    </div>
  );
}