import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../../contexts/cart-context';
import CartIcon from '../../Cart/CartIcon/CartIcon';
import styles from './HeaderButton.module.css';

const HeaderButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [isChangeMade, setIsChangeMade] = useState(false);
    const numOfCartItems = cartCtx.items.reduce((curValue, item) => {
        return curValue + item.amount;
    }, 0);

    const btnClasses = `${styles.Button} ${isChangeMade && styles.pulsate}`;

    useEffect(() => {
        setIsChangeMade(true);

        const timer = setTimeout(() => {
            setIsChangeMade(false);
        }, 350)
        
        return () => {
            clearTimeout(timer);
        }

        
    }, [cartCtx.items]);
    
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={styles["Button__icon"]}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles["Button__badge"]}>{numOfCartItems}</span>
        </button>
    );
}

export default HeaderButton;
