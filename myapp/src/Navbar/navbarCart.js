import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default function NavbarCart() {

}

export function NavbarCartIcon() {

    return (
        <span className="cart-icon">
            <FontAwesomeIcon icon={faCartPlus} />
            <NavbarCartItemsNumber/>
        </span>
    );


}

function NavbarCartItemsNumber() {

    const [CartItemsNumber, setCartItemsNumber] = useState(0);


    return (
        <span className="cart-items">{CartItemsNumber}</span>

    );

}