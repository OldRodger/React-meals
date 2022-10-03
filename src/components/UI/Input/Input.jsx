import React from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef(({label, input}, ref) => {
  const {id, ...rest} = input;
  return (
    <div className={styles.Input}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} ref={ref}/>
    </div>
  );
})

export default Input;
