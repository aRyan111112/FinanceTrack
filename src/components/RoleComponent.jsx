import { useSelector, useDispatch } from 'react-redux';
import { setRole } from '../store/slices/uiSlice';

export default function RoleComponent() {
  const role = useSelector((state) => state.ui.role);
  const dispatch = useDispatch();

  return (
    <div>
      <select
        value={role}
        onChange={(e) => dispatch(setRole(e.target.value))}
        className="px-2 py-2 rounded-xl border border-gray-300 dark:border-gray-600
  bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200
  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
  transition duration-200 shadow-sm cursor-pointer"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}
