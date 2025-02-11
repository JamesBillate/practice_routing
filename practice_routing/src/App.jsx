import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  Redirect,
  Link,
  Navigate,
} from "react-router-dom";
import React, { useState } from "react";

// page components
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Article from "./components/Article";

function App() {
  const articles = [
    {
      id: "1",
      title: "The Future of Web Development Author: Alex Johnson",
      author: "Alex Johnson",
      body: "The web development industry is evolving rapidly with new technologies emerging every year. From artificial intelligence to progressive web applications, developers need to stay updated to remain competitive. One of the biggest trends is the rise of AI-powered tools that assist in coding, debugging, and optimizing websites. Additionally, frameworks like React, Vue, and Angular continue to dominate front-end development, providing efficiency and scalability. As businesses seek faster and more dynamic web solutions, web developers must adapt and learn new technologies to stay ahead in the industry.",
      image:
        "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "2",
      title: " The Importance of Cybersecurity in the Digital Age",
      author: "Sarah Mitchell",
      body: "With the increasing reliance on digital platforms, cybersecurity has become a top priority for individuals and businesses alike. Data breaches and cyber threats are on the rise, making it essential to implement robust security measures. Organizations should focus on employee training, multi-factor authentication, and secure encryption methods to protect sensitive data. Additionally, regular security audits can help identify vulnerabilities before cybercriminals exploit them. Staying informed and proactive about cybersecurity can safeguard valuable information and maintain trust in digital interactions.",
      image:
        "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "3",
      title: "How Photo Editing Transforms Digital Content",
      author: "Mark Reynolds",
      body: "Photo editing plays a crucial role in enhancing digital content across various industries, from marketing to social media. With the right tools, images can be transformed to convey emotions, tell stories, and improve engagement. Software like Adobe Photoshop, Lightroom, and AI-powered editors make it easier than ever to enhance image quality, adjust colors, and remove imperfections. Whether for professional photography or casual use, photo editing helps create visually appealing and impactful content. As technology advances, photo editing tools will continue to evolve, offering even more powerful and accessible features.",
      image:
        "https://images.unsplash.com/photo-1621600411688-4be93cd68504?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "4",
      title: "The Rise of Remote Work and Its Impact on Productivity",
      author: "Emily Carter",
      body: "Remote work has become a permanent fixture in many industries, reshaping how businesses operate and employees manage their time. Studies show that remote workers often experience increased productivity, flexibility, and better work-life balance. However, remote work also comes with challenges, such as maintaining communication, collaboration, and team cohesion. Employers must implement effective digital tools and structured workflows to ensure efficiency. As the future of work continues to shift, companies will need to embrace hybrid models that combine remote and in-office work for maximum productivity and employee satisfaction.",
      image:
        "https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?q=80&w=832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Mario News</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home articles={articles} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/articles/:urlId"
            element={<Article articles={articles} />}
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
