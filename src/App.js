import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import Search from "./Pages/Search";
import About from "./Components/AboutPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/search" element={<Search />} />
            <Route path="/products/:id" element={<Show />} />

            <Route path="/products/:id/edit" element={<Edit />} />
            <Route path="/products/new" element={<New />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
