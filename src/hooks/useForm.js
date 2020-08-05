import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleOnchange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  function clearFrom() {
    setValues(initialValues);
  }

  return { values, handleOnchange, clearFrom };
}

export default useForm;
