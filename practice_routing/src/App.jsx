import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  Navigate,
} from "react-router-dom";
import React from "react";

// page components
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Article from "./components/Article";
import FormArticle from "./components/FormArticle";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Mario News</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/formarticle"><span class="material-symbols-outlined">
add
</span></NavLink>

        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/formarticle" element={<FormArticle />} />

          <Route
            path="/articles/:urlId"
            element={<Article />}
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;