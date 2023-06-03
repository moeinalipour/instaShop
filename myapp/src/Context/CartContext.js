import { createContext, useReducer } from "react";

export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);

const initialCartPattern = {
    "CartItems": [],
    "Length": 
        0
    ,
    "TotalPrice": [
        0
    ]
}

localStorage.removeItem('NewitemsInCart')

if (localStorage.getItem('NewitemsInCart') === null){
    localStorage.setItem('NewitemsInCart', JSON.stringify(initialCartPattern));
    console.log('Inital Cart Local Storage Created');
    
}

export function CartProvider({ children }) {
    const initialCart = JSON.parse(localStorage.getItem('NewitemsInCart'));
    const [Cart, dispatch] = useReducer(CartReducer, initialCart);

    return (
        <CartContext.Provider value={Cart}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartContext.Provider>
    );
}


function CartReducer(Cart, action) {
    
    let CurrentCart = JSON.parse(localStorage.getItem('NewitemsInCart'));
    
    
    if (action.type === 'AddToCart') {
        
        let SelectedItem = {id: action.id,image: action.image, title: action.title, price: action.price, qty: 1}

    
        CurrentCart = {
            ...CurrentCart,
            CartItems: [...Cart.CartItems, SelectedItem],
            Length: Cart.Length + 1,
        };
        localStorage.setItem('NewitemsInCart', JSON.stringify(CurrentCart));


        return CurrentCart;


    }
    else if (action.type === 'DeleteFromCart') {

        const filteredCart = CurrentCart.CartItems.filter(
            t=> t.id !== action.id
        );

        CurrentCart = {
            ...CurrentCart,
            CartItems: filteredCart,
            Length: Cart.Length - 1,
        };

        localStorage.setItem('NewitemsInCart', JSON.stringify(CurrentCart));

        console.log(JSON.parse(localStorage.getItem('NewitemsInCart')))

        return CurrentCart;


    
        console.log(filteredCart)
    

    }
    else if (action.type === 'MakeCartEmpty') {
        
    }
}


