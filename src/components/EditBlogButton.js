import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const EditBlogButton = ({ blogId }) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/edit/${blogId}`);
    };

    return (
        <button onClick={handleEdit} className="edit-button">
            <FontAwesomeIcon icon={faPenToSquare} style={{marginRight: "5px"}} />
            Edit
        </button>
    );
};

export default EditBlogButton;