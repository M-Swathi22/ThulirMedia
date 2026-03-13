import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Wedding from "./pages/Wedding"
import MediaProduction from "./pages/MediaProduction"
import Studio from "./pages/Studio"
import Contact from "./pages/Contact"

import MainLayout from "./layout/MainLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/media-production" element={<MediaProduction />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App