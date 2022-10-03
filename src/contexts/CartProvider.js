import React, { useReducer } from 'react';
import CartContext from './cart-context';


const cartInitalState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {

    if (action.type === "ADD") {
        const totalUpdatedAmount = state.totalAmount + action.item.amount * action.item.price;

        let updatedCart = [...state.items];
        const existingCartItem = updatedCart.find(item => item.id === action.item.id);

        if (existingCartItem) {
            existingCartItem.amount += (action.step || action.item.amount);
        } else {
            updatedCart.push(action.item);
        }

        return {
            items: updatedCart,
            totalAmount: totalUpdatedAmount
        }
    }

    if (action.type === "REMOVE") {
        let updatedCart = [...state.items];
        const existingCartItem = updatedCart.find(item => item.id === action.id);
        existingCartItem.amount -= 1;
        const totalUpdatedAmount = Math.abs(state.totalAmount - existingCartItem.price);

        if (existingCartItem.amount === 0) {
            updatedCart = updatedCart.filter(order => order.id !== action.id);
        }


        return {
            items: updatedCart,
            totalAmount: totalUpdatedAmount
        }
    }

    return state;
};



const CartProvider = ({ children }) => {

    const [cartState, cartDispatch] = useReducer(cartReducer, cartInitalState);

    const addItemHandler = (item, step) => {
        cartDispatch({ type: "ADD", item: item, step: step });
    }

    const removeItemHandler = (id) => {
        cartDispatch({ type: "REMOVE", id: id });
    }

    const cartProvider = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    }

    return (
        <CartContext.Provider value={cartProvider}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
