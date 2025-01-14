import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import LoadingSpinner from '../components/LoadingSpinner';

const EditBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const docRef = doc(db, 'blogs', id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setTitle(data.title);
                    setContent(data.content);
                } else {
                    alert('Blog not found');
                    console.error('Blog not found');
                    navigate('/');
                }
            } catch (error) {
                console.error('Error fetching blog:', error);
                alert('Failed to fetch blog. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id, navigate]);

    const handleEdit = async (e) => {
        e.preventDefault();

        if (title.trim() === '' || content.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        try {
            const docRef = doc(db, 'blogs', id);
            await updateDoc(docRef, {
                title,
                content,
            });
            alert('Blog updated successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error updating blog:', error);
            alert('Failed to update blog. Please try again later.');
        }
    };

    if (loading) {
        return <LoadingSpinner color='#ff8400' />;
    }

    return (
        <form onSubmit={handleEdit} className='edit-blog-form'>
            <h2>Edit Blog</h2>
            <input
                type='text'
                placeholder='Blog Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='form-input'
            />
            <textarea
                placeholder='Blog Content'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className='form-textarea'
            />
            <div className='div-buttons'>
                <button type='submit' className='form-button' style={{marginRight: "10px"}}>
                    Update Blog
                </button>
                <button type='button' onClick={() => navigate('/')} className='cancel-button' style={{marginLeft: "10px"}}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default EditBlog;