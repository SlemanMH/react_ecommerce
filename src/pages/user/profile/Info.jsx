import React, { useContext } from 'react'
import style from './info.module.css'
import { UserContext } from '../../../copmponents/user/context/UserContext';

export default function Info() {
  const { user,setUser ,isLoading} = useContext(UserContext);
  return (
   <section className="py-5">
  <div className="container">
    <div className="d-flex justify-content-between">
      <div className="d-flex gap-2 py-5">
        <p className={style.home}>Home</p>
        <p className={style.home}>/</p>
        <p className={style.account}>My Account</p>
      </div>
      <div>
        <span>Welcome! {user.userName}</span>
      </div>
    </div>
    <div className={`${style.yourProfile} p-5`}>
      <div className="d-flex flex-column gap-2">
        <p className={`${style.addressPage}`}>Your Profile</p>
        <p className={style.id}>ID: {user._id}</p>
        <p className={style.timeCreate}>Create At: {new Date(user.createdAt).toLocaleString()}</p>
      </div>
      <div className="d-flex flex-column gap-5">
        <div className="d-flex gap-5">
          <div className="d-flex flex-column gap-2">
            <span>Username</span>
            <input type="text" placeholder={user.userName} />
          </div>
          <div className="d-flex flex-column gap-2">
            <span>Email</span>
            <input type="text" placeholder={user.email}/>
          </div>
        </div>
        <div className=" d-flex flex-column gap-5">
         
        </div>
      </div>
    </div>
  </div>
</section>


  )
}
