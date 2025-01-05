import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    navigate('/blog'); 
  };

  return (
    <div>
      <h1>Create a New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', margin: '10px 0', height: '200px' }}
          />
        </div>
        <button
          type="submit"
          style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
