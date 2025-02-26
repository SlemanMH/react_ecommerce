import React from 'react'
import sideImage from '../../../assets/images/auth/sideImage.png'
import style from './login.module.css'
export default function Login() {
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
    <div className="d-flex flex-column gap-4" >
      <input type="email" placeholder="Email" />
      <input type="number" placeholder="Password" />
      <div className="d-flex gap-5 align-items-center">
      <button>
        Log In
      </button>
      <a className={style.forget}>Forget Password?</a>
    </div>
    </div>
    
  </div>

  </div>
</div>

  )
}
