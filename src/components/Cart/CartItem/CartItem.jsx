import React from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
    
    return (
        <figure className={classes.CartItem}>
            <div className={classes['item__description']}>
                <h2 className={classes['item__name']}>{props.name}</h2>
                <small>${props.price.toFixed(2)}</small>
                <small className={classes['item__quantity']}>x{props.quantity}</small>
            </div>
            <div>
                <div  className={classes['item__actions']}>
                    <button onClick={props.onRemove}>-</button>
                    <button onClick={props.onAdd}>+</button>
                </div>
            </div>
        </figure>
    );
}

export default CartItem;
