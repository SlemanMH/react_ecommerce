import React from 'react'
import style from './notfound.module.css';
export default function NotFound() {
  return (
   <div className="container">
  <div className="d-flex gap-2 py-5"> 
    <p className={style.home}>Home</p>
    <p className={style.home}>/</p>
    <p className={style.error}>404 Error</p>
  </div>
  <section>
    <div className={`${style.detailsError} d-flex flex-column gap-5 py-5`} >
      <h2>404 Not Found</h2>
      <p>Your visited page not found. You may go home page.</p>
      <button>Back to home page</button>
    </div>
  </section>
</div>

  )
}
