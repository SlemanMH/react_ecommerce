import React from 'react'
import portrait from '../../../assets/images/about/portrait.png'
import shop from '../../../assets/images/about/shop.svg'
import sale from '../../../assets/images/about/sale.svg'
import shoppingBag from '../../../assets/images/about/shoppingBag.svg'
import moneyBag from '../../../assets/images/about/moneyBag.svg'
import twitter from '../../../assets/images/about/twitter.svg'
import instagram from '../../../assets/images/about/instagram.svg'
import linkedin from '../../../assets/images/about/linkedin.svg'
import tomCruise from '../../../assets/images/about/tomCruise.png'
import emmaWatson from '../../../assets/images/about/emmaWatson.png'
import willSmith from '../../../assets/images/about/willSmith.png'
import customer from '../../../assets/images/services/customer.svg'
import delivery from '../../../assets/images/services/delivery.svg'
import secure from '../../../assets/images/services/secure.svg'
import style from './about.module.css'
export default function About() {
    return (
        <div>
            <section className="our-story">
                <div className="container">
                    <div className="d-flex flex-column py-5">
                        <div className=" d-flex gap-2 ">
                            <p className={style.home}>Home</p>
                            <p className={style.home}>/</p>
                            <p className={style.about}>About</p>
                        </div>
                        <div className="d-flex gap-5">
                            <div className={`${style.detailsOur} d-flex flex-column gap-4`} >
                                <h2>Our Story</h2>
                                <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an
                                    active presense in Bangladesh. Supported by wide range of tailored marketing, data and
                                    service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
                                    customers across the region.</p>
                                <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive
                                    offers a diverse assotment in categories ranging from consumer.</p>
                            </div>
                            <div>
                                <img src={portrait} />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex gap-5">
                        <div className=" box-serves d-flex py-5 gap-5">
                            <div className={style.serves}>
                                <div className={`${style.black} p-2`} >
                                    <img src={shop} />
                                </div>
                                <div>
                                    <p className={style.number}>10.5k </p>
                                    <p className={style.servesParagraph}>Sallers active our site</p>
                                </div>
                            </div>
                            <div className={style.serves}>
                                <div className={`${style.black} p-2`}>
                                    <img src={sale} />
                                </div>
                                <div>
                                    <p className={style.number}>33.5k </p>
                                    <p className={style.servesParagraph}>Mopnthly Produduct Sale</p>
                                </div>
                            </div>
                            <div className={style.serves}>
                                <div className={`${style.black} p-2`}>
                                    <img src={shoppingBag} />
                                </div>
                                <div>
                                    <p className={style.number}>45.5k</p>
                                    <p className={style.servesParagraph}>Customer active in our site</p>
                                </div>
                            </div>
                            <div className={style.serves}>
                                <div className={`${style.black} p-2`}>
                                    <img src={moneyBag} />
                                </div>
                                <div>
                                    <p className={style.number}>25.5k </p>
                                    <p className={style.servesParagraph}>Anual gross sale in our site</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="employees">
                <div className="container">
                    <div className="d-flex gap-5 py-5">
                        <div className="d-flex flex-column gap-4">
                            <img className={style.employeeImg}  src={tomCruise} />
                            <div className="d-flex flex-column gap-2">
                                <h2>Tom Cruise</h2>
                                <p>Founder &amp; Chairman</p>
                                <div className="d-flex gap-2">
                                    <img src={twitter} />
                                    <img src={instagram} />
                                    <img src={linkedin} />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-4">
                            <img className={style.employeeImg} src={emmaWatson} />
                            <div className="d-flex flex-column gap-2">
                                <h2>Emma Watson</h2>
                                <p>Managing Director</p>
                                <div className="d-flex gap-2">
                                    <img src={twitter} />
                                    <img src={instagram} />
                                    <img src={linkedin} />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-4">
                            <img className={style.employeeImg}  src={willSmith} />
                            <div className="d-flex flex-column gap-2">
                                <h2>Will Smith</h2>
                                <p>Product Designer</p>
                                <div className="d-flex gap-2">
                                    <img src={twitter} />
                                    <img src={instagram} />
                                    <img src={linkedin} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="servis">
                <div className="container">
                    <div className="d-flex gap-5">
                        <div className="d-flex flex-column gap-3">
                            <div className={`${style.black}`}>
                                <img className={style.servisImg} src={delivery} />
                            </div>
                            <div>
                                <h3>FREE AND FAST DELIVERY</h3>
                                <p>Free delivery for all orders over $140</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-3">
                            <div className={`${style.black}`}>
                                <img className={style.servisImg} src={customer} />
                            </div>
                            <div>
                                <h3>24/7 CUSTOMER SERVICE</h3>
                                <p>Friendly 24/7 customer support</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-3">
                            <div className={`${style.black}`}>
                                <img className={style.servisImg} src={secure} />
                            </div>
                            <div>
                                <h3>MONEY BACK GUARANTEE</h3>
                                <p>We reurn money within 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
