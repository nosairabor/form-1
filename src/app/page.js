"use client"

import CustomInput from "./CustomInput";
import { useMutation } from 'react-query';
import { Formik, Form, Field } from "formik";
import axios from 'axios';

export default function Home() {
  const onSubmit = async (formData, {resetForm}) => {
      
    const response = await axios.post('https://getform.io/f/b33a5365-9e44-4d9b-ae7a-435100a2a33d',formData, {
      
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    
    if (response.status === 200) {
      console.log('POST request was successful', response.status);

      resetForm();
      return response.data
      
    }
      
  };

  const {mutate, isLoading, isError, isSuccess} = useMutation(onSubmit, {
    
  })
  if(isLoading) {
    return <p>Loading..</p>
  }
  if(isError) {
    return <p>something is wrong</p>
  }

  return (
    <Formik
      initialValues={{
        Name: '',
        password: '',
      }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) =>(
      <Form className="text-gray-500">
        <CustomInput
          label="Name"
          name="name"
          placeholder="Enter your Name"
        />
        <CustomInput
          label="Password"
          name="passwor"
          placeholder="Enter your password"
        />
        <button type="submit">Submit</button>
      </Form>
      )}
    </Formik>
  );
}
