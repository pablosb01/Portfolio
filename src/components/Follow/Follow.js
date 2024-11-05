export default function Follow({text, number}) {
  return (
    <div className="flex flex-col items-center bg-zinc-300 border-b-2 dark:bg-zinc-500 dark:bg-zinc-500 p-4 rounded-xl">
      <p className="text-2xl">{text}</p>
      <p className="text-4xl">{number}</p>
    </div>
  );
}
