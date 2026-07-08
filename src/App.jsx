import { useState } from 'react'
import './App.css'
import useWallpaper from './hooks/useWallpaper.js'
import Navbar from './components/Navbar.jsx'

function App() {
  const [category, setCategory] = useState("waifu")
  const [pageSize, setPageSize] = useState(10)
  const [page, setPage] = useState(1)

  const wallpaper = useWallpaper(category, pageSize, page)

  return (
    <>
      <Navbar
        category={category}
        setCategory={setCategory}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />

      {wallpaper.map((item) => (
        <img key={item.id} src={item.url} width={250}/>
      ))}
    </>
  )
}

export default App
