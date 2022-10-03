import React, { Fragment } from 'react';
import hero from '../../assets/images/hero.jpg';
import style from './Header.module.css';
import HeaderButton from './HeaderButton/HeaderButton';

const Header = (props) => {

    return (
        <Fragment>
            <div className={style.Header}>
                <h1>React Meals 🍴</h1>
                <HeaderButton onClick={props.onShowCart}/>
            </div>

            <div className={style.Hero}>
                <img src={hero} alt="hero-img" />
            </div>
        </Fragment>
    );
}

export default Header;
