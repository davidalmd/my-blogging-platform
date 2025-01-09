import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import LoadingSpinner from './LoadingSpinner';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [blogsLoading, setBlogsLoading] = useState(false);

  useEffect(() => {
    setBlogsLoading(true);
    const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const blogsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogsData);
      setFilteredBlogs(blogsData); // Initialize filteredBlogs with full list
      setBlogsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(query)
    );
    setFilteredBlogs(filtered);
  };

  return (
    <div className="blog-list">
      <h2>Blog Posts</h2>

      <input
        type="text"
        placeholder="Search blogs..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-bar"
        style={{
          padding: '10px',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      />
      
      {blogsLoading && <LoadingSpinner color='#007BFF'/>}
      {!filteredBlogs.length ? (
        <p>No blogs match your search. Try a different keyword!</p>
      ) : (
        filteredBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <span className="blog-date">
              {blog.createdAt && blog.createdAt.toDate().toLocaleString()}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
