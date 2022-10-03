import React, { Fragment } from 'react';
import MealsAvailable from './MealsAvailable/MealsAvailable';
import MealsSummary from './MealsSummary/MealsSummary';

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary/>
            <MealsAvailable/>
        </Fragment>
    );
}

export default Meals;
