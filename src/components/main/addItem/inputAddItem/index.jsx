import React from 'react';

// css
import styles from './inputAddItem.module.css';


function InputAddItem(props) {
    return (
        <div className={styles.input__container}>
            <input className={styles.input}
                value={props.addInputValue}
                onInput={(e) => { props.handleInputValueChange(e) }}
                type="text" placeholder="text" />
        </div>
    )
}

export default InputAddItem;