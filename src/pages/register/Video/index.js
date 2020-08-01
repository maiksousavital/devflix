import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function AddVideo() {
  return (
    <div>
      <PageDefault>
        <h1>Add New Video</h1>
        <Link to="/add/category">Add Category</Link>
      </PageDefault>
    </div>
  );
}

export default AddVideo;
