import { useDispatch, useSelector } from 'react-redux';
import { setSearch, setFilterType } from '../store/slices/uiSlice';

export default function Filters() {
    const dispatch = useDispatch();
    const { search, filterType } = useSelector((state) => state.ui);

    return (
        <div className="flex justify-end gap-3 mb-4">
            <input
                value={search}
                onChange={(e) => dispatch(setSearch(e.target.value))}
                placeholder="Search..."
                className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 
  bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 
  placeholder-gray-400 dark:placeholder-gray-500
  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
  transition duration-200 shadow-sm"
            />

            <select
                value={filterType}
                onChange={(e) => dispatch(setFilterType(e.target.value))}
                className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600
  bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200
  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
  transition duration-200 shadow-sm cursor-pointer"
            >
                <option value="all">All</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
        </div>
    );
}
