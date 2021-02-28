import React, { useState } from 'react';

// css
import './app.css';

//components
import Header from './components/header';
import Main from './components/main';


function App() {
    const [state, setSate] = useState([
        {
            desctiption: "read a book",
            id: 1,
            done: false
        },
        {
            desctiption: "mi ban",
            id: 2,
            done: false
        }
    ])
    const [addInputValue, setAddInputValue] = useState("")




    const handleInputValueChange = (e) => {
        setAddInputValue(e.target.value)
    }
    const handleBtnAdd = () => {
        if (addInputValue) {
            setSate((prevState) => {
                return [
                    ...prevState,
                    {
                        desctiption: addInputValue,
                        id: state[state.length - 1] ? state[state.length - 1].id + 1 : 0,
                        done: false
                    }
                ]
            })
        }
        setAddInputValue("");
    }
    const handleCencle = () => {
        setAddInputValue("");
    }



    const handleDone = (id) => {
        const newState = state.map((item) => ({
            ...item,
            done: item.id === id ? !item.done : item.done
        }))
        setSate(newState)
    }
    const handleDelete = (id) => {
        const newState = state.filter((item) => item.id !== id )
        setSate(newState)
    }


    return (
        <div className="app">
            <Header />
            <Main
                state={state}
                handleDone={handleDone}
                addInputValue={addInputValue}
                handleInputValueChange={handleInputValueChange}
                handleBtnAdd={handleBtnAdd}
                handleCencle={handleCencle}
                handleDelete={handleDelete} />
        </div>
    )
}

export default App;