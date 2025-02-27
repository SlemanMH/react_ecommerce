import React, { useState } from 'react'
import sideImage from '../../../assets/images/auth/sideImage.png'
import style from './login.module.css'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const loginUser = async (value) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/signin`, value);
      if (response.status === 200) {
        localStorage.setItem('userToken', response.data.token);
        navigate('/');
      }
    } catch (error) {
      if (error.response.status === 400) {
        setServerError(error.response.data.message);
      } else {
        setServerError("server error");
      }
  
    } finally {
      setIsLoading(false);
    }
  }
  return (
 <div className={`${style.login} d-flex`}>
  <div>
    <img src={sideImage} />
  </div>
  <div className='w-100 align-self-center justify-content-center d-flex'>

  <div className="d-flex flex-column " >
    <div>
      <h3>Log in to Exclusive</h3>
      <p>Enter your details below</p>
    </div>
    <Form onSubmit={handleSubmit(loginUser)}>
    <div className="d-flex flex-column gap-4" >
      <input type="email" placeholder="Email" {...register('email', { required: "Please enter your email" })} />
      {errors.email ? <div className='text-danger error'>{errors.email.message}</div> : null}
      <input type="text" placeholder="Password" {...register('password', { required: "Please enter your password" })} />
      {errors.password ? <div className='text-danger error'>{errors.password.message}</div> : null}
      <div className="d-flex gap-5 align-items-center">
      {serverError ? <div className='text-danger text-center error'>{serverError}</div> : null}
      <button type='submit' disabled={isLoading}>
      {isLoading ? "Loading..." : "Log in"}
      </button>
      <Link to={'/auth/forgetPassword'} className={style.forget}>Forget Password?</Link>
    </div>
    </div>
    </Form>
    
  </div>

  </div>
</div>

  )
}
