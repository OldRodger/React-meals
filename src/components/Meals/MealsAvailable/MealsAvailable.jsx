import React from 'react';
import Card from '../../UI/Card/Card';
import MealsItem from '../MealsItem/MealsItem';
import style from "./MealsAvailable.module.css";


const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const MealsAvailable = () => {
    const mealItems = DUMMY_MEALS.map(meal => <MealsItem 
        key={meal.id}
        id={meal.id}
        name={meal.name}
        desc={meal.description}
        price={meal.price}
    />);

    return (
        <section>
            <Card className={style.meals}>
                <ul>
                    {mealItems}
                </ul>
            </Card>
        </section>
    );
}

export default MealsAvailable;
