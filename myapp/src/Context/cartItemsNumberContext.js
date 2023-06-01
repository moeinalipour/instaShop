import { createContext } from 'react';
import { useReducer } from 'react';

export const CartItemsNumberContext = createContext(null);
export const CartItemsNumberDispatch = createContext(null);

export function CartItemsNumberProvider({ children }) {
    const [CartItemsNumber, dispatch] = useReducer(CartItemsNumberReducer, initialCartCount);
  
    return (
      <CartItemsNumberContext.Provider value={CartItemsNumber}>
        <CartItemsNumberDispatch.Provider value={dispatch}>
          {children}
        </CartItemsNumberDispatch.Provider>
      </CartItemsNumberContext.Provider>
    );
  }

  function CartItemsNumberReducer(CartItemsNumber, action){

    if (action.type == 'incrementCartNumber'){

        CartItemsNumber = CartItemsNumber + 1
        console.log(CartItemsNumber);
        return CartItemsNumber
    }
  }

  const CurrentCartItems = JSON.parse(localStorage.getItem('itemsInCart'));

  const initialCartCount = CurrentCartItems.length;

  