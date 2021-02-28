import React from 'react';

// css
import styles from './addItem.module.css';

// components
import InputAddItem from './inputAddItem';
import InputAddBtns from './inputAddBtns';


function AddItem(props){
    return(
        <div className={styles.addItem}>
            <InputAddItem handleInputValueChange={props.handleInputValueChange} addInputValue={props.addInputValue} />
            <InputAddBtns handleBtnAdd={props.handleBtnAdd} handleCencle={props.handleCencle} />
        </div>
    )
}

export default AddItem;