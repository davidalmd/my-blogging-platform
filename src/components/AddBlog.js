import React, { useState } from 'react';
import { Timestamp, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import LoadingSpinner from './LoadingSpinner';

const AddBlog = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.trim() === '' || content.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    try {
      setIsAdding(true);

      await addDoc(collection(db, 'blogs'), {
        title,
        content,
        createdAt: Timestamp.now(),
      });
      setTitle('');
      setContent('');
      onAdd();
    } catch (err) {
      console.error('Error adding blog:', err);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-blog-form">
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-input"
      />
      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="form-textarea"
      />
      <button type="submit" className="form-button">
        {isAdding ? <LoadingSpinner /> : 'Add Blog'}
      </button>
    </form>
  );
};

export default AddBlog;
