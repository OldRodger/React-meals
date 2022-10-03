import React, { useContext } from 'react';
import CartContext from '../../contexts/cart-context';
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount =`$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const cartItems = cartCtx.items.map(order => <CartItem
        key={order.id}
        name={order.name}
        price={order.price}
        quantity={order.amount}
        onAdd={cartCtx.addItem.bind(null, order, 1)}
        onRemove={cartCtx.removeItem.bind(null, order.id)}
    />);


    return (

        <Modal onClose={props.onClose}>
            {cartItems}

            <div>
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={classes.actions}>
                    <button
                        onClick={props.onClose}
                        className={classes['button--alt']}>
                        Close
                    </button>

                    {hasItems && <button className={classes.button}> Order </button>}
                </div>
            </div>

        </Modal>
    );
}

export default Cart;
