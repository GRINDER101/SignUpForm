import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          SIGNUP FORM MODEL.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>UserName</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='enter your name'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email Address</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='enter your email address'
            value={values.emailaddress}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name="password"
            placeholder='type your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirn your Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          sign up
        </button>
        <span className='form-input-login'>
          Already have an account Log in <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;