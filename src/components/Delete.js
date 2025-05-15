import React from "react";

const Delete = ({ onDelete, id }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      onDelete(id);
    }
  };

  return (
    <button onClick={handleDelete} style={{ color: "red", cursor: "pointer" }}>
      Delete
    </button>
  );
};

export default Delete;
