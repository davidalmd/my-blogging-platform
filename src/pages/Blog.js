// src/components/Blog.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Blog = ({ posts, deletePost }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Blog Page</h1>
      <input 
        type="text" 
        placeholder="Search posts..." 
        className="search-bar" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      
      <div>
        {filteredPosts.map((post) => (
          <div key={post.id} style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button
              onClick={() => navigate(`/blog/edit/${post.id}`)}
              style={{ marginRight: '10px', padding: '5px 10px', backgroundColor: '#ffc107', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
              <i className="fas fa-edit"></i> Edit
            </button>
            <button
              onClick={() => deletePost(post.id)}
              style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
              <i className="fas fa-trash-alt"></i> Delete
            </button>
          </div>
        ))}
      </div>

      <Link to="/blog/new">
        <button style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          <i className="fas fa-plus"></i> Create New Post
        </button>
      </Link>
    </div>
  );
};

export default Blog;
