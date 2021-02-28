import React from 'react';

// css
import styles from './logo.module.css';


function Logo(){
    return(
        <div className={styles.logo__container}>
            <h1 className={styles.logo}>todo list app</h1>
        </div>
    )
}

export default Logo;