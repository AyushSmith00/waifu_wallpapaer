export default function Navbar({
  category,
  setCategory,
  pageSize,
  setPageSize,
}) {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-4 md:flex-row">

        <h1 className="text-3xl font-extrabold text-white">
          AuraWall
        </h1>

        <div className="flex flex-wrap items-center gap-3">

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-white outline-none transition focus:border-purple-500"
          >
            <option value="waifu">Waifu</option>
            <option value="maid">Maid</option>
            <option value="uniform">Uniform</option>
          </select>

          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-white outline-none transition focus:border-purple-500"
          >
            <option value={10}>10 Images</option>
            <option value={20}>20 Images</option>
            <option value={30}>30 Images</option>
          </select>

        </div>
      </div>
    </nav>
  );
}