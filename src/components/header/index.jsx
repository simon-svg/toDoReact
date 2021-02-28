import React from 'react';

// css
import styles from './header.module.css';

// components
import Logo from './logo';


function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.header__cont}>
                    <Logo />
                </div>
            </div>
        </header>
    )
}

export default Header