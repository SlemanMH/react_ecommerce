import React from 'react'
import style from './checkout.module.css';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
export default function Checkout() {
    return (
        <section className={style.checkout}>
            <Container>

                <h1 className='fs-2 fw-bold'>Billing Details</h1>
                <div className='d-flex align-items-center justify-content-between'>
                    <Form className='w-50'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Address*</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone Number*</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Coupon Code</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Button className={`${style.placeBtn}`} >Place Order</Button>
                    </Form>
                    <div className={`${style.orderSummary} w-25`}>
                        <div className={style.orders}>

                        </div>
                        <div className={`${style.orderItem} d-flex justify-content-between align-items-center pb-2`}>
                            <span>Subtotal:</span>
                            <span>$</span>
                        </div>
                        <div className={`${style.orderItem} d-flex justify-content-between align-items-center py-2`}>
                            <span>Shipping:</span>
                            <span>$</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center pt-2'> 
                            <span>Total:</span>
                            <span>$</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
