import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  Navigate,
} from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

import React, { useEffect, useState } from "react";

// page components
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Article from "./components/Article";
import FormArticle from "./components/FormArticle";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Mario News</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/formarticle">Add Article</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="/about" element={user ? <About /> : <Login />} />
          <Route path="/contact" element={user ? <Contact /> : <Login />} />
          <Route
            path="/formarticle"
            element={user ? <FormArticle /> : <Login />}
          />
          <Route
            path="/edit/:urlId"
            element={user ? <FormArticle /> : <Login />}
          />
          <Route
            path="/articles/:urlId"
            element={user ? <Article /> : <Login />}
          />
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
