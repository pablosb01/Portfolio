export default function ThemeToggle({ toggleTheme, theme }) {
    return (
      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
      </button>
    );
  }