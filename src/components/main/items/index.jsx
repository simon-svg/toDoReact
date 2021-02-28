import React from 'react';

// css
import styles from './items.module.css';

// components
import Item from './item';


function Items(props) {
    return (
        <div className={styles.items}>
            <div className={styles.items__cont}>
                {
                    props.state.map((item) => {
                        return (
                            <Item key={item.id} item={item} handleDone={props.handleDone} handleDelete={props.handleDelete} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Items;