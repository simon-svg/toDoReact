import React from 'react';

// css
import styles from './btn.module.css';


function Btn({ inner, bgColor, handleBtnAdd, handleCencle }) {
    return (
        <button
            className={styles.btn}
            style={{ backgroundColor: bgColor }}
            onClick={handleBtnAdd ? handleBtnAdd : handleCencle ? handleCencle : null} >
            {inner}
        </button>
    )
}

export default Btn;