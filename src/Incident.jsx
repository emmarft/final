import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import Map from "./Map.jsx"
import User from "./User.jsx"
import './App.css'

function Incident () {

    return (
        <>
            <div className="container">
                <Map/>
                <User/>
            </div>
        </>
    )
}

export default Incident;