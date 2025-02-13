import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "./pages/Books";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/books" element={<Books />} />
            </Routes>
        </Router>
    );
}

export default App;
