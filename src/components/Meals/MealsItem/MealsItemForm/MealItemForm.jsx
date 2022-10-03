import React, { useRef } from 'react';
import Input from '../../../UI/Input/Input';
import { ButtonBrown } from '../../../Utils/Styled-components-utils';



const MealItemForm = (props) => {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredAmount = Number(inputRef.current.value);
        props.onAddToCart(enteredAmount);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Amount"
                ref={inputRef}

                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }} />
            <ButtonBrown>+ Add</ButtonBrown>
            
        </form>
    );
}

export default MealItemForm;
