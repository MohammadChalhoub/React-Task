import React from 'react'
import {useNavigate} from "react-router-dom"
import './NavBar.css'

export default function NavBar(){
    const navigate = useNavigate();
    
    const Register = () => {
        navigate("/Register")
    }

    const Dashboard = () => {
        navigate("/DashBoard")
    }
    return (
        <div className='navbar'>
            <input type="button" value="Register" className='nav-button' onClick={Register}/>
            <input type="button" value="Dashbaord" className='nav-button' onClick={Dashboard}/>

        </div>
    )
}