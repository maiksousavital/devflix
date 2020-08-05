import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/Form/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videoRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function AddVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoriesTitles = categories.map(({ name }) => name);

  const { handleOnchange, values } = useForm({
    name: '',
    url: '',
    category: '',
  });

  useEffect(() => {
    categoriesRepository.getAllCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  console.log(categories);

  return (
    <PageDefault>
      <h1>Add New Video</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          videoRepository
            .create({
              name: values.name,
              url: values.url,
              categoryId: 1,
            })
            .then(() => {
              history.push('/');
            });
        }}
      >
        <FormField
          label="Video Title"
          type="text"
          name="name"
          value={values.name}
          onChange={handleOnchange}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleOnchange}
        />

        <FormField
          label="Category"
          type="text"
          name="category"
          value={values.category}
          options={categoriesTitles}
          onChange={handleOnchange}
        />

        <Button>Save</Button>
      </form>

      <br />
      <div>
        <Link to="/add/category">Add Category</Link>
      </div>
    </PageDefault>
  );
}

export default AddVideo;
