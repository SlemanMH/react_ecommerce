import React, { useState } from 'react'
import style from './register.module.css'
import sideImage from '../../../assets/images/auth/sideImage.png'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import defaultPhoto from '../../../assets/images/user/profile.jpg';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { Slide, toast } from 'react-toastify';
export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const registerUser = async (value) => {
    const formData = new FormData();
    formData.append('userName', value.userName);
    formData.append('email', value.email);
    formData.append('password', value.password);
    formData.append('image', defaultPhoto);
 
    setIsLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/signup`, formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      
      if (response.status === 201) {
        toast.info('please check your email', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });

        navigate('/auth/login');
      }
    } catch (error) {
      if (error.response.status === 409) {
        setServerError("Email already exists");
      } else {
        setServerError("server error");
      }
    } finally {
      setIsLoading(false);
    }

  }
  return (
    <div className={`${style.signup} d-flex `}>
      <div>
        <img src={sideImage} />
      </div>
      <div className="w-100 align-self-center justify-content-center d-flex" >
        <div className="d-flex flex-column " >
          <div>
            <h3>Create an account</h3>
            <p>Enter your details below</p>
          </div>
          <Form onSubmit={handleSubmit(registerUser)}>
          <div className="d-flex flex-column gap-4 " >
            <input type="text" placeholder="Name" {...register('userName', { required: "Please enter your username" })}/>
            {errors.userName ? <div className='text-danger error'>{errors.userName.message}</div> : null}
            <input type="email" placeholder="Email" {...register('email', { required: "Please enter your email" })} />
            {errors.email ? <div className='text-danger error'>{errors.email.message}</div> : null}
            <input type="text" placeholder="Password" {...register('password', { required: "Please enter your password" })} />
            {errors.password ? <div className='text-danger error'>{errors.password.message}</div> : null}
          </div>
          <div className="d-flex flex-column py-5 gap-4">
          {serverError ? <div className='text-danger text-center error'>{serverError}</div> : null}
            <button className={`${style.buttonCreate} `} type='submit' disabled={isLoading}>
              {isLoading ? "Loading..." : "  Create Account"}
            </button>

            <div className="d-flex gap-2">
              <p className={`${style.haveAccount}`} >Already have account?</p>
              <Link to={'/auth/login'} className={`${style.login}`} >Log in</Link>
            </div>
          </div>
          
          </Form>
        </div>
      </div>
    </div>

  )
}
