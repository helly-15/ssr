import './App.css';
import React from 'react';
import Chart from "./components/Chart/Chart";
import {Route, Routes, Navigate} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                    <Routes>
                        <Route
                            path='/:yearId'
                            element={<Chart/>}
                        />
                        <Route
                            path="*"
                            element={<Navigate to="/2020" replace />}
                        />
                    </Routes>
            </header>
        </div>
    );
}

export default App;
