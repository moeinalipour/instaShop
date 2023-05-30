import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import CartContainer from '../Cart/carContainer';
import { isCartClickedContext } from "../Cart/isCartClickedContext";
export default function NavbarCart() {

}

export function NavbarCartIcon() {
    const [isCartClicked,setIsCartClicked] = useState(false)

    function isCartIsonCliecked() {
        setIsCartClicked(true)
    }

    return (
        <isCartClickedContext.Provider value={setIsCartClicked}>
            <span className="cart-icon" onClick={isCartIsonCliecked}>
                <FontAwesomeIcon icon={faCartPlus} />
                <NavbarCartItemsNumber />
            </span>
            <CartContainer isCartClicked={isCartClicked} setIsCartClicked={{setIsCartClicked}} />
        </isCartClickedContext.Provider>

    );


}

function NavbarCartItemsNumber() {

    const [CartItemsNumber, setCartItemsNumber] = useState(4);


    return (
        <span className="cart-items">{CartItemsNumber}</span>

    );

}