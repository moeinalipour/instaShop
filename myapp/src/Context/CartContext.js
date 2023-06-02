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

// localStorage.removeItem('NewitemsInCart')

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
    const SelectedItem = {id: action.id,image: action.image, title: action.title, price: action.price};


    if (action.type === 'AddToCart') {

        CurrentCart = {
            ...CurrentCart,
            CartItems: [...Cart.CartItems, SelectedItem],
            Length: Cart.Length + 1,
        };
        localStorage.setItem('NewitemsInCart', JSON.stringify(CurrentCart));


        return CurrentCart;


    }
    else if (action.type === 'DeleteFromCart') {

    }
    else if (action.type === 'MakeCartEmpty') {
        
    }
}


