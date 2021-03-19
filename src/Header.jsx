import {React,useEffect,useState,useContext} from 'react'
import logo from './logo.png';
import { Names } from './StartPage';
import { useStateValue } from './StateProvider';
function Header(prop) {
    const [{userName}]=useStateValue();
    
    // useEffect(() => {
    //     upName(prompt('Confirm Your Name'))
    // }, [])
    return (
        <>
            <div className="logo">
                <img className='logo_size' src={logo} alt="Loading..." />
                <h1>Messenger App ♥️</h1>
                <p>Welcome <strong style={{color:"orange", textTransform:"capitalize"}}>  {userName}</strong> by <i>Muhammad Jawad</i></p>
            </div>
        </>
    )
}

export default Header
