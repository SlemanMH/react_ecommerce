import React from 'react'

import cart from '../../../assets/images/wishlist/cart.svg';
import gamepad from '../../../assets/images/wishlist/gamepad.png';
import jacket from '../../../assets/images/wishlist/jacket.png';
import keyboard from '../../../assets/images/wishlist/keyboard.png';
import laptop from '../../../assets/images/wishlist/laptop.png';
import pack from '../../../assets/images/wishlist/pack.png';
import RGBLiquid from '../../../assets/images/wishlist/RGBLiquid.png';
import WasteBasket from '../../../assets/images/wishlist/wasteBasket.svg';
import havit from '../../../assets/images/wishlist/havit.png';
import ipsLCD from '../../../assets/images/wishlist/ipsLCD.png';
import star from '../../../assets/images/rate/fiveStar.svg';
import group from '../../../assets/images/thisMonth/Group.svg';
import style from './wishlist.module.css';
export default function Wishlist() {
  return (
  <div>
  <section className="Wishlist">
    <div className="container py-5">
      <div className="d-flex flex-column">
        <div className={`${style.itemWishlist} d-flex`}>
          <p>Wishlist (4)</p>
          <button>Move All To Bag</button>
        </div>
        <div className="d-flex gap-5 py-5">
          <div>
            <img className={style.itemImage} src={pack} alt="pack-img" />
            <div className={`${style.wasteBasket1} position-absolute`} >
              <img src={WasteBasket} />
            </div>
            <div className={`${style.discount1} position-absolute`}>
              <p>-35%</p>
            </div>
            <div className={`${style.addCart1} position-absolute py-1`}>
              <img className="cart1" src={cart} />
              <button className={style.cart1Button}>Add To Cart</button>
            </div>
            <div className="d-flex flex-column">
              <div className="pt-2">
                <p className={style.nameItem}>Gucci duffle bag</p>
              </div>
              <div className="d-flex gap-3">
                <p className={style.productPrice}>$960</p>
                <p className={style.productPriceDiscount}>$1160</p>
              </div>
            </div>
          </div>
          <div>
            <img className={style.itemImage} src={RGBLiquid} alt="pack-img" />
            <div className={`${style.wasteBasket2} position-absolute`}>
              <img src={WasteBasket} />
            </div>
            <div className={`${style.addCart1} position-absolute py-1`}>
              <img className={style.cart1} src={cart} />
              <button className={style.cart1Button}>Add To Cart</button>
            </div>
            <div className="d-flex flex-column">
              <div className="pt-2">
                <p className={style.nameItem}>RGB liquid CPU Cooler</p>
              </div>
              <div className="d-flex gap-3">
                <p className={style.productPrice}>$1960</p>
              </div>
            </div>
          </div>
          <div>
            <img className={style.itemImage} src={gamepad} alt="pack-img" />
            <div className={`${style.wasteBasket3} position-absolute`}>
              <img src={WasteBasket} />
            </div>
            <div className={`${style.addCart1} position-absolute py-1`}>
              <img className={style.cart1} src={cart} />
              <button className={style.cart1Button}>Add To Cart</button>
            </div>
            <div className="d-flex flex-column">
              <div className="pt-2">
                <p className={style.nameItem}>GP11 Shooter USB Gamepad</p>
              </div>
              <div className="d-flex gap-3">
                <p className={style.productPrice}>$550</p>
              </div>
            </div>
          </div>
          <div>
            <img className={style.itemImage} src={jacket} alt="pack-img" />
            <div className={`${style.wasteBasket4} position-absolute`}>
              <img src={WasteBasket} />
            </div>
            <div className={`${style.addCart1} position-absolute py-1`}>
              <img className={style.cart1} src={cart} />
              <button className={style.cart1Button}>Add To Cart</button>
            </div>
            <div className="d-flex flex-column">
              <div className="pt-2">
                <p className={style.nameItem}>Quilted Satin Jacket</p>
              </div>
              <div className="d-flex gap-3">
                <p className={style.productPrice}>$750</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="Just-For-You">
    <div className="container">
      <div className="d-flex flex-column">
        <div className=" d-flex gap-2 py-2">
          <div className={style.tag} />
          <h2 className={style.tagName}>This Month</h2>
          <button className={ `${style.buttonSeeAll} px-4`}>See All</button>
        </div>
        <div className=" d-flex pt-4 gap-5">
          <div>
            <img className={style.nameItem} src={laptop} alt="pack-img" />
            <div className={`${style.group1} position-absolute`}>
              <img src={group} />
            </div>
            <div className={`${style.discount2} position-absolute`}>
              <p />
            </div>
            <div className={`${style.addCart2} position-absolute py-1`}>
              <img className={style.cart2} src={cart} />
              <button className={style.cart1Button}>Add To Cart</button>
            </div>
            <div className="d-flex flex-column">
              <div className="pt-2">
                <p className={style.nameItem}>ASUS FHD Gaming Laptop</p>
              </div>
              <div className="d-flex gap-3">
                <p className={style.productPrice}>$960</p>
                <p className={style.productPriceDiscount}>$1160</p>
              </div>
              <div className="rate d-flex  gap-1">
                <img src={star} alt="star-rate" />
                <p className={style.numberResidents}>(65)</p>
              </div>
            </div>
          </div>
          <div>
            <img className={style.itemImage} src={ipsLCD} alt="pack-img" />
            <div className={`${style.group2} position-absolute`}>
              <img src={group}/>
            </div>
            <div className={`${style.addCart2} position-absolute py-1`}>
              <img className={style.cart2} src={cart} />
              <button className={style.cart1Button}>Add To Cart</button>
            </div>
            <div className="d-flex flex-column">
              <div className="pt-2">
                <p className={style.nameItem}>IPS LCD Gaming Monitor</p>
              </div>
              <div className="d-flex gap-3">
                <p className={style.productPrice}>$1160</p>
              </div>
              <div className="rate d-flex  gap-1">
                <img src={star} alt="star-rate" />
                <p className={style.numberResidents}>(65)</p>
              </div>
            </div>
          </div>
          <div>
            <img className={style.itemImage} src={havit} alt="pack-img" />
            <div className={`${style.group3} position-absolute`}>
              <img src={group} />
            </div>
            <div className={`${style.tagNew} position-absolute`}>
              <p>NEW</p>
            </div>
            <div className={`${style.addCart2} position-absolute py-1`}>
              <img className={style.cart2} src={cart} />
              <button className={style.cart1Button}>Add To Cart</button>
            </div>
            <div className="d-flex flex-column">
              <div className="pt-2">
                <p className={style.nameItem}>HAVIT HV-G92 Gamepad</p>
              </div>
              <div className="d-flex gap-3">
                <p className={style.productPrice}>$560</p>
              </div>
              <div className="rate d-flex  gap-1">
                <img src={star} alt="star-rate" />
                <p className={style.numberResidents}>(65)</p>
              </div>
            </div>
          </div>
          <div>
            <img className={style.itemImage}
             src={keyboard} alt="pack-img" />
            <div className={`${style.group4} position-absolute`}>
              <img src={group}  />
            </div>
            <div className={`${style.discount2} position-absolute`}>
              <p>-35%</p>
            </div>
            <div className={`${style.addCart2} position-absolute py-1`}>
              <img className={style.cart2} src={cart} />
              <button className={style.cart1Button}>Add To Cart</button>
            </div>
            <div className="d-flex flex-column ">
              <div className="pt-2">
                <p className={style.nameItem}>AK-900 Wired Keyboard</p>
              </div>
              <div className="d-flex gap-3">
                <p className={style.productPrice}>$200</p>
              </div>
              <div className="rate d-flex  gap-1">
                <img src={star} alt="star-rate" />
                <p className={style.numberResidents}>(65)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}
