import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import sideImage from '../../../assets/images/auth/sideImage.png'
import { Slide, toast } from 'react-toastify';
import { Form } from 'react-bootstrap';
import style from './changePassword.module.css'
export default function ChangePassword() {
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const userToken = localStorage.getItem('userToken');

    const changePassword = async (value) => {
      setIsLoading(true);
      try {
        const response = await axios.patch(`${import.meta.env.VITE_BURL}/auth/forgotPassword`, value);
        if (response.status === 200) {
          toast.success('password change successfuly', {
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
         if(userToken){
          navigate('/profile/info');
         }else{
           navigate('/auth/login');
         }
        }
      } catch (error) {
        console.log(error)
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
        <Form onSubmit={handleSubmit(changePassword)}>
        <div className="d-flex flex-column gap-4 " >
          <input type="email" placeholder="Email" {...register('email', { required: "Please enter your email" })} />
          {errors.email ? <div className='text-danger error'>{errors.email.message}</div> : null}
          <input type="text" placeholder="Password" {...register('password', { required: "Please enter your password" })} />
          {errors.password ? <div className='text-danger error'>{errors.password.message}</div> : null}
          <input type="text" placeholder="code"{...register('code', { required: "Please enter your code" })}/>
          {errors.code ? <div className='text-danger error'>{errors.code.message}</div> : null}
        </div>
        <div className="d-flex flex-column py-5 gap-4">
        {serverError ? <div className='text-danger text-center error'>{serverError}</div> : null}
          <button className={`${style.buttonCreate} `} type='submit' disabled={isLoading}>
          {isLoading ? "changing..." : "Change Password"}
          </button>
        </div>
        </Form>
      </div>
    </div>
  </div>
  )
}
