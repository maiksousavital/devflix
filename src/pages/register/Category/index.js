import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/Form/FormField";
import { Link } from "react-router-dom";

function AddCategory() {
  const initialValues = {
    name: "",
    description: "",
    color: "",
  };
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleOnchange(e) {
    setValue(e.target.getAttribute("name"), e.target.value);
  }

  return (
    <div>
      <PageDefault>
        <h1>Add Category</h1>
        <form
          onSubmit={function handleSubmit(e) {
            e.preventDefault();
            setCategories([...categories, values]);
            setValues(initialValues);
          }}
        >
          <FormField
            label="Category Name"
            type="text"
            name="name"
            value={values.name}
            onChange={handleOnchange}
          />

          <div>
            <label htmlFor="Category">
              Description:
              <textarea
                type="text"
                value={values.description}
                name="description"
                onChange={handleOnchange}
              />
            </label>
          </div>

          <FormField
            label="Color"
            type="color"
            name="color"
            value={values.color}
            onChange={handleOnchange}
          />

          <button>Save</button>
        </form>

        <ul>
          {categories.map((category, index) => {
            return <li key={`${category}${index}`}>{category.name}</li>;
          })}
        </ul>

        <Link to="/">Go to Home Page</Link>
      </PageDefault>
    </div>
  );
}

export default AddCategory;
