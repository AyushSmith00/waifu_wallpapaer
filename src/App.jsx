import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import useWallpaper from "./hooks/useWallpaper";

function App() {
  const [category, setCategory] = useState("waifu");
  const [pageSize, setPageSize] = useState(10);
  const [page] = useState(1);

  const wallpaper = useWallpaper(category, pageSize, page);

  return (
    <div className="min-h-screen bg-zinc-950">

      <Navbar
        category={category}
        setCategory={setCategory}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

        {wallpaper.map((item) => (
          <Card
            key={item.id}
            wallpaper={item}
          />
        ))}

      </div>

    </div>
  );
}

export default App;