import React from 'react';

// css;
import styles from './item.module.css';


function Item({ item, handleDone, handleDelete }) {
    return (
        <div className={styles.item}>
            <div className={styles.item__info}>
                <span className={styles.item__inner}
                    style={{textDecoration: item.done ? "line-through" : "none"}}
                    onClick={() => { handleDone(item.id) }}>
                    {item.desctiption}
                </span>
            </div>
            <div className={styles.item__btns}>
                <button className={`${styles.item__btn} ${styles.item__btn_red}`} onClick={() => handleDelete(item.id)}>
                    <i className={`${styles.icon} fa fa-trash`}></i>
                </button>
            </div>
        </div>
    )
}

export default Item;