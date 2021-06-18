import React from 'react';
import { useFormik } from 'formik';
import {Button,TextField} from "@material-ui/core";
  
  const About = () =>  {
    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        console.log(values)
      },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
           <TextField
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <TextField
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
          />
          <label htmlFor="email">Email Address</label>
          <TextField
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
          />
          <Button type="submit">Submit</Button>
        </form>


    );
  };

  export default About