import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Container } from 'react-bootstrap';

import { useContext } from 'react';
import { Slide, toast } from 'react-toastify';
import {  useNavigate } from 'react-router-dom';

import style from './cart.module.css';
export default function Cart() {
  return (
    <section className={style.cart}>
                    <Container>
                        <table className='w-100'>
                            <thead>
                                <tr>
                                    <th className='w-25'>Product</th>
                                    <th className='text-center w-25'>Price</th>
                                    <th className='text-center w-25'>Quantity</th>
                                    <th className='text-center w-25'>Subtotal</th>
                                </tr>
                            </thead>

                            <tbody className='text-center'>
                              
                            </tbody>
                        </table>
                       
                    </Container>
                </section> 
  )
}
