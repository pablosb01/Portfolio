export default function ProjectComp({ p }) {
    return (
      <div
        style={{ backgroundImage: `url(${p.img})` }}
        className="w-full h-60 justify-center bg-cover bg-center rounded-xl"
      >
        <h3 className="text-3xl bg-zinc-300 dark:bg-zinc-600 p-2 font-kanit rounded-xl">{p.title}</h3>
      </div>
    );
  }
  