export default function Card({ wallpaper }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-zinc-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/20 hover:shadow-2xl">

      <img
        src={wallpaper.url}
        alt="Wallpaper"
        className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4 text-white opacity-0 transition duration-300 group-hover:opacity-100">

        <span className="rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
          {wallpaper.tags?.[0]?.name ?? "Wallpaper"}
        </span>

        <span className="rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
          ❤️ {wallpaper.favorites}
        </span>

      </div>
    </div>
  );
}