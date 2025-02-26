import React from 'react'
import style from './register.module.css'
import sideImage from '../../../assets/images/auth/sideImage.png'
export default function Register() {
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
          <div className="d-flex flex-column gap-4 " >
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Password" />
          </div>
          <div className="d-flex flex-column py-5 gap-4">
            <button className={`${style.buttonCreate} `}>
              Create Account
            </button>

            <div className="d-flex gap-2">
              <a className={`${style.haveAccount}`} href>Already have account?</a>
              <a className={`${style.login}`} href>Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
