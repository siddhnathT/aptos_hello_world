import React, { useEffect } from 'react';
import './App.css';
import { getHelloWorld } from './AptosService';

function App() {
    useEffect(() => {
        getHelloWorld();
    }, []);

    return (
        <div className="App">
            <h1>Hello, Aptos!</h1>
        </div>
    );
}

export default App;
