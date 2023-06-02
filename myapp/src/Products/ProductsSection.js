import { useContext, useRef, useState } from 'react'
import product1 from './Products-Picture/product1.webp'
import product2 from './Products-Picture/product2.webp'
import product3 from './Products-Picture/product3.webp'
import product4 from './Products-Picture/product4.webp'
import product5 from './Products-Picture/product5.webp'
import {CartDispatchContext} from '../Context/CartContext'
export default function ProductsSection() {

    const productsItems = products.map(product =>
        <ProductCard id={product.id} title={product.title} price={product.price} thumbnail={product.thumbnailUrl} />

    )


    return (
        <section>
            <div className="products">
                <ProductsSectionTitle />
                <div className="products-center">
                    {productsItems}
                </div>
            </div>
        </section>
    );
}

function ProductsSectionTitle() {

    return (
        <div className="products-section-title">
            <h2>Our Products</h2>
        </div>
    );
}

function ProductCard(props) {

    const dispatch = useContext(CartDispatchContext);

    function addtoCartButton() {
        dispatch(
            {type: 'AddToCart' , id: props.id ,image: props.thumbnail, title: props.title , price: props.price}
        )
    }


    return (
        <section className="product">
            <div className="products-img-container">
                <img className="products-img" src={props.thumbnail} />
            </div>
            <div className="products-desc">
                <p className="products-title">{props.title}</p>
                <p className="products-price">${props.price}</p>
            </div>
            <button  className="add-to-cart"  onClick={addtoCartButton}>Add To Cart</button>
        </section>

    );
}

const products = [
    { id: 1, title: 'Asus 4070', price: 800, thumbnailUrl: product1 },
    { id: 2, title: 'Keyboard Gaming', price: 750, thumbnailUrl: product2 },
    { id: 3, title: 'Mouse Gaming', price: 350, thumbnailUrl: product3 },
    { id: 4, title: 'Case Gaming', price: 550.5, thumbnailUrl: product4 },
    { id: 5, title: 'Motherboard Gaming', price: 1100, thumbnailUrl: product5 }
]
