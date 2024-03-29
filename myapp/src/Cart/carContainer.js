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
import { CartContext, CartDispatchContext } from "../Context/CartContext";




export default function CartContainer({ isCartClicked }) {
    
    const initialCart = useContext(CartContext);
    const initialCartItems = initialCart.CartItems;
    const isCartClickedDispatch = useContext(isCartClickedContext);

    function cartCloseButton() {
        isCartClickedDispatch(false);
    }


    const CartItems = initialCartItems.map(product => 
        <CartItem id={product.id} image={product.image} title={product.title} price={product.price} qty={product.qty} />
    
    )


    if (isCartClicked) {

    
        return (
            <div className="cartContainer" >
                <div className="cartSection">
                    <h3>Your Cart</h3>
                    <div className="cart-items-wrapper">
                        {CartItems}
                    </div>
                    <div className="cart-section-close-icon" onClick={cartCloseButton}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
            </div>
        );

    }
}


export function CartItem(props) {

    const dispatch = useContext(CartDispatchContext);
    
    function deletebutton(){
    
        dispatch({type: 'DeleteFromCart', id: props.id, qty: props.qty});

    }

    function IncreaseButton(){
        dispatch({type: 'IncreaseItem', id: props.id, qty: props.qty});

    }

    function DecreaseButton(){
        dispatch({type: 'DecreaseItem', id: props.id, qty: props.qty});

    }

    return (
        <div className="cart-item">
            <div className="cart-item-img-wrapper">
                <img src={props.image} alt="product1" />
            </div>
            <div className="cart-item-details">
                <div className="cart-item-title">
                    <h3>{props.title}</h3>
                </div>
                <div className="cart-item-price">
                    <p>$ {props.price}</p>
                </div>
            </div>
            <div className="cart-item-count-section">
                <FontAwesomeIcon onClick={DecreaseButton} icon={faMinus}  className="cart-item-count-decrement"/>

                <div className="cart-item-count-number">{props.qty}</div>
                <FontAwesomeIcon onClick={IncreaseButton} icon={faPlus}  className="cart-item-count-increment"/>

            </div>

            <div className="cart-item-delete-section">
                <i className="fa-regular fa-trash-can fa-lg cart-item-delete-icon"></i>
                <FontAwesomeIcon icon={faTrashCan} onClick={deletebutton}  className="cart-item-delete-icon"/>

            </div>

        </div>

    );
}


const cartItemProducts = [
    { id: 1, title: 'Asus 4070', price: 800, thumbnailUrl: product1 },
    { id: 2, title: 'Keyboard Gaming', price: 750, thumbnailUrl: product2 },
    { id: 3, title: 'Mouse Gaming', price: 350, thumbnailUrl: product3 },
    { id: 4, title: 'Case Gaming', price: 550.5, thumbnailUrl: product4 },
    { id: 5, title: 'Motherboard Gaming', price: 1100, thumbnailUrl: product5 }
]
