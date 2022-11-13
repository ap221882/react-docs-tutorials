import React, { useState } from "react";

type Props = {};

const defaultFormData = {
  title: "",
  body: "",
};

const Form = (props: Props) => {
  const [formData, setFormData] = useState(defaultFormData);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    setFormData(defaultFormData);
  };

  return (
    <div style={{ textAlign: "center", backgroundColor: "GrayText" }}>
      <h1>Form</h1>
      <p>Create a post</p>
      <form onSubmit={onSubmit}>
        <label htmlFor='title'></label>
        <br />
        <input type='text' id='title' onChange={onChange} />
        <br />
        <br />
        <label htmlFor='body'></label>
        <input type='text' id='body' onChange={onChange} />
        <br />
        <br />
        <button type='submit'>Upload post</button>
      </form>
    </div>
  );
};

export default Form;
