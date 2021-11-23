import React from 'react'
import Card from './Card.js'
import Charts from './Charts.js'
import './CSS/style.css';
// import Sidebar from './Sidebar.js'
import Sidebar2 from './Sidebar2.js'


export default function Dashboard() {
    return (
        <div className="container-fluid row d-flex flex-nowrap d-sm-flex flex-sm-wrap">
            {/* <Sidebar/> */}
            <Sidebar2/>
            <Card />
            <Charts/>
        </div>
    )
}
