import React from 'react';

// css
import styles from './main.module.css';

// components
import AddItem from './addItem';
import Items from './items';


function Main(props) {
    return (
        <main>
            <div className={styles.wrapper}>
                <AddItem
                    addInputValue={props.addInputValue}
                    handleInputValueChange={props.handleInputValueChange}
                    handleBtnAdd={props.handleBtnAdd}
                    handleCencle={props.handleCencle} />
                <Items
                    state={props.state}
                    handleDone={props.handleDone}
                    handleDelete={props.handleDelete} />
            </div>
        </main>
    )
}

export default Main;