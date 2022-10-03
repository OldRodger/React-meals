import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import Card from '../Card/Card';
import styles from './Modal.module.css';

const ModalView = (props) => (
    <Card className={styles.Modal}>
        {props.children}
    </Card>
)
const BackDrop = (props) => {
    return (
        <div onClick={props.onClose} className={styles.Backdrop}></div>
    )
}


const portalLocation = document.querySelector('.overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<BackDrop onClose={props.onClose} />, portalLocation)}
            {ReactDom.createPortal(<ModalView>{props.children}</ModalView>, portalLocation)}
        </Fragment>
    );
}

export default Modal;
