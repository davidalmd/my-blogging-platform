import React, { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const DeleteBlogButton = ({ blogId, onDeleteSuccess }) => {
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true);
        if (window.confirm("Are you sure you want to delete this blog?")) {
            try {
                await deleteDoc(doc(db, "blogs", blogId));
                alert("Blog deleted successfully!");
                if (onDeleteSuccess) onDeleteSuccess(blogId);
            } catch (error) {
                console.error("Error deleting blog:", error);
                alert("Failed to delete blog. Please try again later.");
            }
        }
        setLoading(false);
    };

    return (
        <button onClick={handleDelete} className="delete-button">
            <FontAwesomeIcon icon={faTrash} style={{marginRight: "5px"}} />
            {loading ? "Deleting..." : 'Delete'}
        </button>
    );
};

export default DeleteBlogButton;