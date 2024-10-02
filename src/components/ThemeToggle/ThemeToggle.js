export default function ThemeToggle({ toggleTheme, theme }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-red-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:bg-gray-700 dark:peer-focus:ring-gray-600 rounded-full peer dark:border-gray-600 peer-checked:bg-violet-400 transition-all duration-300"></div>
      <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5 peer-checked:bg-white"></span>
      <svg
        className={`absolute left-1 w-4 h-4 text-zinc-500 transition-opacity duration-500 transform ${
          theme === 'light' ? 'opacity-100 translate-x-0' : 'opacity-0'
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2v2m0 16v2m8-10h2M2 12H0m17.657-4.243l1.414-1.414M4.929 19.071l1.414-1.414M17.657 19.071l-1.414-1.414M4.929 4.929l-1.414 1.414M12 6a6 6 0 100 12 6 6 0 000-12z"
        />
      </svg>
      <svg
        className={`absolute right-1 w-4 h-4 text-zinc-800 dark:text-grya-800 transition-opacity duration-500 transform ${
          theme === 'dark' ? 'opacity-100 translate-x-0' : 'opacity-0 '
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
        />
      </svg>
    </label>
  );
}
