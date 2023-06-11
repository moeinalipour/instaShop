import { useContext, useEffect, useRef, useState } from 'react'
import { CartDispatchContext } from '../Context/CartContext'
import axios from 'axios'




export default function ProductsSection() {

    // This is my state for products read from API
    const [products, setProducts] = useState([]);


    //Here i call API when component mount
    useEffect(() => {
         axios.get('http://localhost:4000/products').then(function (response) {
            
            //Here i store the data that i give from API in state
            setProducts(response.data);
        })
            .catch(function (error) {
            })
    }, [])

    // Here i map for show Products component for each products
    const productsItems = products.map(product =>
        <ProductCard id={product.id} title={product.name} price={product.price} thumbnail={product.imageName} />

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
            { type: 'AddToCart', id: props.id, image: props.thumbnail, title: props.title, price: props.price, qty: 1 }
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
            <button className="add-to-cart" onClick={addtoCartButton}>Add To Cart</button>
        </section>

    );
}

