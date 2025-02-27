import React, { useState } from 'react'
import style from './forgetpassword.module.css'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import sideImage from '../../../assets/images/auth/sideImage.png'
import { Form } from 'react-bootstrap';
import axios from 'axios';
export default function ForgetPassword() {
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const userToken = localStorage.getItem('userToken');
    const forgetPassword = async (value) => {
      setIsLoading(true);
      try {
        const response = await axios.patch(`${import.meta.env.VITE_BURL}/auth/sendcode`, value);
        if (response.status === 200) {
          if(userToken){
            navigate('/changePassword');
          }else{
            navigate('/auth/changePassword');
          }
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
   
    <Form onSubmit={handleSubmit(forgetPassword)}>
    <div className="d-flex flex-column gap-4" >
      <input type="email" placeholder="Email" {...register('email', { required: "Please enter your email" })} />
      {errors.email ? <div className='text-danger error'>{errors.email.message}</div> : null}
      <div className="d-flex gap-5 align-items-center">
      {serverError ? <div className='text-danger text-center error'>{serverError}</div> : null}
      <button type='submit' disabled={isLoading}>
      {isLoading ? "Sending..." : "Send Code"}
      </button>
    </div>
    </div>
    </Form>
    
  </div>

  </div>
</div>
  )
}
