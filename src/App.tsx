import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom"

import Index from "./pages";
import Photo from "./pages/photo";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:id" element={<Photo />} />
        <Route path="/gallery" element={<Index />} />
        <Route path="/profile" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
