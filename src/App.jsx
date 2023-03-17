import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage'
import Personages from './pages/Personages'
import Episodes from "./pages/Episodes";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/personages" element={<Personages />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
