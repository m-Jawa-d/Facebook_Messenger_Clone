import React from 'react'
import Header from "./Header";
import {NavLink} from "react-router-dom";
import Footer from "./Footer";
import StartPage from './StartPage';
function App() {

    return (
        <>
            {/* <NavLink exact to="/">✖</NavLink> */}
            <Header />
            <Footer />
        </>
    )
}

export default App;
