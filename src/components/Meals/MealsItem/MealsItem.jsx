import React, { useContext } from 'react';
import CartContext from '../../../contexts/cart-context';
import { FlexBox, FlexColumn } from '../../Utils/Styled-components-utils';
import MealItemForm from './MealsItemForm/MealItemForm';

const MealsItem = (props) => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount,
        })
    }
    


    return (
        <FlexBox>
            <FlexColumn>
                <h2>{props.name}</h2>
                <i>{props.desc}</i>
                <strong>${props.price.toFixed(2)}</strong>
            </FlexColumn>

            <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </FlexBox>
    );
}



export default MealsItem;
