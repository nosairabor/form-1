"use client";
import Image from "next/image";
import { Formik, Form } from "formik";
import CustomInput from "./CustomInput";
import { useMutation } from "react-query";

export default function Home() {
  const submitForm = async (formData) => {
    try {
      const response = await fetch("https://getform.io/f/e149a787-9e4f-4ffa-a3b9-50b219a1dbfa", 
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    } catch (error) {
      throw new Error("There was an error while submitting the form.");
    }
  };
  const mutation = useMutation(submitForm);   
  const onSubmit = async (values) => {     
      try {       
        const result = await mutation.mutateAsync(values);     
        // Handle the result (e.g., show a success message)
        console.log('Form submitted successfully:', result);    
      }
      catch (error) {     
            // Handle any errors here     
        console.error('Error submitting form:', error);    
      }  
  };
  return (
    <div>
      <Formik initialValues={{ name: "", password: "" }} onSubmit={onSubmit}>
        <Form>
          <CustomInput label="Name" name="name" placeholder="Enter your name" />
          <CustomInput
            label="Password"
            name="password"
            placeholder="Enter your Password"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
