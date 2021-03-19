import { createContext, React, useState } from 'react'
import logo from './logo.png';
import Button from '@material-ui/core/Button';
import Header from "./Header";
import { NavLink } from "react-router-dom";
import { Hidden } from '@material-ui/core';
import { useStateValue } from './StateProvider';
function StartPage() {
    const [ { userName },dispatch]= useStateValue();

    const [name, upName] = useState('');

    const nameput = (obj) => {
        upName(obj.target.value);
    }

    const defl = (obj) => {
        obj.preventDefault();
    }
    const submit_Name = () => {
        dispatch({
            type:'userName',
            name : name,
    })
    }
    console.log(name)
    return (
        <>
                <form onSubmit={defl}>
                    <div className="full">
                        <div className="half">
                            <img style={{ width: '80px' }} src={logo} alt="Loading" />
                            <h1 style={{ marginTop: '8px', marginBottom: "2px" }}>Welcome to Messenger</h1>
                            <p style={{ marginBottom: "23px" }} >Please Enter your name to procced further</p>
                            <input onChange={nameput} required autoComplete="none" className="name_input" type="text" placeholder="Enter Your Name" />
                            {/* <Button className="startpage_button">Log In</Button> */}
                            <div>
                                {/* <NavLink exact to="/App" >go to hell</NavLink> */}
                                <NavLink exact to="/Contact" ><Button disabled={!name} onClick={submit_Name} type="submit" className={!name ? "startpage_button_null" : "startpage_button"}>Log In</Button></NavLink>
                                {/* <h1 style={{marginTop:'8px', marginBottom:"23px"}}>Welcome to Messenger</h1>
                 <input className="name_input" type="text" placeholder="Enter Your Name"/> */}
                            </div>
                        </div>
                    </div>
                </form>
        </>
    )
}

export default StartPage;
// "startpage_button"
