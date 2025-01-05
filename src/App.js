// src/App.js
import React, { useState } from "react";
import AddBlog from "./components/AddBlog";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleAddBlog = () => {
    setRefresh((prev) => !prev); // Toggle refresh to re-fetch blogs
  };

  return (
    <div className="App">
      <h1>Abhay's Blogging Platform</h1>
      <AddBlog onAdd={handleAddBlog} />
      <BlogList key={refresh} />
      <Footer />
    </div>
  );
};

export default App;
