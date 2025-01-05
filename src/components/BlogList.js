import React, { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const blogsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="blog-list">
      <h2>Blog Posts</h2>
      {blogs.length === 0 ? (
        <p>No blogs available. Add a new blog!</p>
      ) : (
        blogs.map((blog) => (
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
