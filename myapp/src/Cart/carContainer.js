import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { isCartClickedContext } from "./isCartClickedContext";
import product1 from '../Products/Products-Picture/product1.webp'
import product2 from '../Products/Products-Picture/product1.webp'
import product3 from '../Products/Products-Picture/product1.webp'
import product4 from '../Products/Products-Picture/product1.webp'
import product5 from '../Products/Products-Picture/product1.webp'



export default function CartContainer({ isCartClicked }) {

    const isCartClickedDispatch = useContext(isCartClickedContext);

    function cartCloseButton() {
        isCartClickedDispatch(false);
        console.log(isCartClicked);
    }


    if (isCartClicked) {
        return (
            <div className="cartContainer" >
                <div className="cartSection">
                    <h3>Your Cart</h3>
                    <div className="cart-items-wrapper">
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    </div>
                    <div className="cart-section-close-icon" onClick={cartCloseButton}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
            </div>
        );

    }
}


export function CartItem() {
    console.log(product1)


    return (
        <div className="cart-item">
            <div className="cart-item-img-wrapper">
                <img src={product1} alt="product1" />
            </div>
            <div className="cart-item-details">
                <div className="cart-item-title">
                    <h3>Asus 4070</h3>
                </div>
                <div className="cart-item-price">
                    <p>$ 800</p>
                </div>
            </div>
            <div className="cart-item-count-section">
                <FontAwesomeIcon icon={faMinus}  className="cart-item-count-decrement"/>

                <div className="cart-item-count-number">5</div>
                <FontAwesomeIcon icon={faPlus}  className="cart-item-count-increment"/>

            </div>

            <div className="cart-item-delete-section">
                <i className="fa-regular fa-trash-can fa-lg cart-item-delete-icon"></i>
                <FontAwesomeIcon icon={faTrashCan}  className="cart-item-delete-icon"/>

            </div>

        </div>

    );
}

localStorage.setItem('itemsInCart', null);

const cartItemProducts = [
    { id: 1, title: 'Asus 4070', price: 800, thumbnailUrl: product1 },
    { id: 2, title: 'Keyboard Gaming', price: 750, thumbnailUrl: product2 },
    { id: 3, title: 'Mouse Gaming', price: 350, thumbnailUrl: product3 },
    { id: 4, title: 'Case Gaming', price: 550.5, thumbnailUrl: product4 },
    { id: 5, title: 'Motherboard Gaming', price: 1100, thumbnailUrl: product5 }
]
