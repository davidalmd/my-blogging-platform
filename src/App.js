import React, { useState } from "react";
import AddBlog from "./components/AddBlog";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [refresh, setRefresh] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleAddBlog = () => {
    setRefresh((prev) => !prev);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "App dark" : "App light"}>
      <header>
        <h1>Abhay Blogs</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <AddBlog onAdd={handleAddBlog} />
      <BlogList key={refresh} />
      <Footer />
    </div>
  );
};

export default App;
