import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/Form/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';

function AddCategory() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  const { values, handleOnchange, clearFrom } = useForm(initialValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesRepository
      .getAllCategoriesWithVideos()
      .then((categoriesWithVideos) => {
        console.log(categoriesWithVideos);
      });
  });

  return (
    <PageDefault>
      <h1>Add Category</h1>
      <form
        onSubmit={function handleSubmit(e) {
          e.preventDefault();
          setCategories([...categories, values]);
          clearFrom();
        }}
      >
        <FormField
          label="Category Name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleOnchange}
        />

        <FormField
          label="Description"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleOnchange}
        />

        <FormField
          label="Color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleOnchange}
        />

        <Button type="submit">Save</Button>
      </form>

      {/* Put a table here to replace the ul  */}

      <ul>
        {categories.map((category, index) => {
          return <li key={`${category}${index}`}>{category.name}</li>;
        })}
      </ul>

      <Link to="/">Go to Home Page</Link>
    </PageDefault>
  );
}

export default AddCategory;
