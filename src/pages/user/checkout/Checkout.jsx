import style from './checkout.module.css';
import { Button, Container, Form } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react'
import Loading from '../../../copmponents/user/loading/Loading';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Slide, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../copmponents/user/context/CartContext';

export default function Checkout() {
    const [cart, setCart] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [loader, setLoader] = useState(false);
    const token = localStorage.getItem('userToken');
    const navigate = useNavigate();
    const { setCartCount } = useContext(CartContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const getCart = async () => {

        try {
            const response = await axios.get(`${import.meta.env.VITE_BURL}/cart`,
                {
                    headers: {
                        Authorization: `Tariq__${token}`
                    }
                }
            );
            setCart(response.data.products);

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    const placeOrder = async (value) => {

        setLoader(true);
        try {
            const response = await axios.post(`${import.meta.env.VITE_BURL}/order`, value,
                {
                    headers: {
                        Authorization: `Tariq__${token}`
                    }
                }
            );
            if (response.status === 201) {
                toast.success('Order placed successfuly', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                });
                navigate('/profile/orders');
                setCartCount(0);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false);
        }
    }
    useEffect(() => {
        getCart();
    }, [])

    if (isLoading) {
        return <Loading />
    }
    return (
        <section className={style.checkout}>
            <Container>

                <h1 className='fs-2 fw-bold'>Billing Details</h1>
                <div className='d-flex align-items-center justify-content-between'>
                    <Form className='w-50' onSubmit={handleSubmit(placeOrder)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Address*</Form.Label>
                            <Form.Control type="text" placeholder="" {...register('address', { required: "Please enter your address" })} />
                            {errors.address ? <div className='text-danger error'>{errors.address.message}</div> : null}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone Number*</Form.Label>
                            <Form.Control type="text" placeholder=""  {...register('phone', { required: "Please enter your phone" })} />
                            {errors.phone ? <div className='text-danger error'>{errors.phone.message}</div> : null}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Coupon Code</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Button className={`${style.placeBtn}`} type='submit' disabled={loader}>Place Order</Button>
                    </Form>
                    <div className={`${style.orderSummary} w-25`}>
                        <div className={style.orders}>
                            {cart.map(item =>
                                <div key={item._id} className='d-flex justify-content-between pb-3 align-items-center py-1'>
                                    <div className='d-flex align-items-center gap-2'>
                                        <img src={item.details.mainImage.secure_url} width={40} />
                                        <span className={style.productName}>{item.details.name} </span>
                                    </div>
                                    <span className={style.price}>&nbsp;${item.quantity * item.details.finalPrice}</span>
                                </div>
                            )}
                        </div>
                        <div className={`${style.orderItem} d-flex justify-content-between align-items-center pb-2`}>
                            <span>Subtotal:</span>
                            <span className={style.price}>${
                                cart.reduce((sum, item) => sum + (item.details.finalPrice * item.quantity), 0)}</span>
                        </div>
                        <div className={`${style.orderItem} d-flex justify-content-between align-items-center py-2`}>
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center pt-2'>
                            <span>Total:</span>
                            <span className={style.price}>${
                                cart.reduce((sum, item) => sum + (item.details.finalPrice * item.quantity), 0)}</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
