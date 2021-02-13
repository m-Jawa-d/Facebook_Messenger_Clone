import {React, useState,useEffect} from 'react'
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
function Footer(prop) {
    const [val, upVal]=useState('');
    const [messege, upMessage]=useState([]);
    // const [name, upName]=useState('');

    // useEffect(() => {
    //     upName(prompt('what is your name'))
    // }, [])

    const thisVal=(obj)=>{
        upVal(obj.target.value)
    }
    const send=()=>{
       upMessage((obj)=>{
          return( [...obj, val])
       });upVal('');
    }

    return (
        <>
            <div className="Footer">
                <input value={val} onChange={thisVal} className="messege_input" type="text" placeholder="Enter your message..." />
                <span className="emoji">🙂</span>
                <Button onClick={send} className="B"> <SendIcon className="icon" /> </Button>
            </div>

            <div className='cent'>
                <div className='messeges' >
                {messege.map((valo)=>{
                    return( <p className="para"> {valo}</p>)
                })}
                    {/* <p> {val}</p> */}
                </div>
            </div>
        </>
    )
}

export default Footer
