import React from 'react';

// css
import styles from './inputAddBtns.module.css';

// commons
import Btn from '../../../../commons/btn';


function InputAddBtns(props){
    return(
        <div className={styles.inputAddBtns}>
            <Btn bgColor="#007BFF" inner="update" handleBtnAdd={props.handleBtnAdd} />
            <Btn bgColor="#DC3545" inner="cancle" handleCencle={props.handleCencle} />
        </div>
    )
}

export default InputAddBtns;