import React, { Component } from 'react'
import './CSS/Navbar.css'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="page-footer bg-dark">
                    <div className="page-footer-inner "> 2016 © Metronic Theme By
                        <a target="_blank" href="http://keenthemes.com">Keenthemes</a> &nbsp;|&nbsp;
                        <a href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" title="Purchase Metronic just for 27$ and get lifetime updates for free" target="_blank">Purchase Metronic!</a>
                    </div>
                    <div className="scroll-to-top">
                        <i className="icon-arrow-up" />
                    </div>
                </div>

            </div>
        )
        
    }
}
