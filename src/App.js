import './App.css';
import React from 'react';
import Chart from "./components/Chart/Chart";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route
                        path='/year/:yearId'
                        exact={'true'}
                        element={<Chart/>}
                    />
                </Routes>
            </header>
        </div>
    );
}

export default App;
