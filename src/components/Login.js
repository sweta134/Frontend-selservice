import React, { useState } from "react"
import './CSS/stylog.css'
import './CSS/bootstrap.min.css'
import { useHistory } from "react-router";
import axios from "axios";


export default function Login() {
    const [styling, setstyling] = useState({ display: 'none' });
    const [stylingOt, setstylingOt] = useState({ display: 'none' });
    const [stylingBtn, setstylingBtn] = useState({ display: 'none' });
    // const [title, setTitle] = useState('')
    const [studentid, setstudentid] = useState('');
    const [OTP, setOTP] = useState('');
    const history = useHistory();
    //   const [text, settext] = useState('');
    //   String(text)
    // const textChange=()=>{
    //   if(text.length>0)
    //   {
    //     setstyling({display: 'block'});
    //   }
    //   }


    //Function for verifying otp after clicking on the submit otp button via API
    const handleOnLogin = () => {
        axios.post("http://localhost:4000/verify-otp/", {
            studentid: studentid,
            otp: OTP
        }).then(response => {
            console.log('response >>> ', response);
            if (response.data.status === 'success')
                history.push('/dashboard');
            else {
                alert("Wrong Input");
                setOTP('');
            }
        }).catch(error => {
            console.log('error >>> ', error);
        });
    }

    //Function for verifying student after clicking on send otp button via API
    const handleOnClick = (e) => {
        setstylingOt({ display: 'block' });
        e.preventDefault();
        axios.post("http://localhost:4000/verifystudent/", {
            studentid: studentid
        }).then(response => {
            console.log('response >>> ', response);
        }).catch(error => {
            console.error('error >>> ', error);
        });
    }

    // Code for login module
    return (<div className="body" >
        <main className="d-flex align-items-center min-vh-100 py-3 py-md-0" >
            <div className="container" >
                <div className="card login-card" >
                    <div className="row no-gutters" >
                        <div className="col-md-6 div-img" >
                            <img src="Assets/img/6162-removebg-preview.png"
                                className="login-card-img2"
                                width="100%" /> { /* <img src="Assets/images/login.png" className="login-card-img"/> */}
                        </div>
                        <div className="col-md-6" >
                            <div className="card-body" >
                                <div className="brand-wrapper" >
                                    <img src="Assets/img/logo.png"
                                        className="logLogo" />
                                </div>

                                <form action="" >
                                    <div className="htmlForm-group" >
                                        <label htmlFor="text"
                                            className="sr-only" > </label>
                                        <input type="text"
                                            name="studentid"
                                            id="studentid"
                                            value={studentid}
                                            className="form-control"
                                            placeholder="Enter User ID"
                                            onChange={e => [setstudentid(e.target.value), setstyling({ display: 'block' })]}
                                        />
                                    </div >
                                    <button className="btn btn-block login-btn mb-4"
                                        style={styling}
                                        onClick={handleOnClick} > Send OTP </button>
                                    <div className="htmlForm-group mb-4" >
                                        <label htmlFor="Otp"
                                            className="sr-only"> OTP </label>
                                        <input type="text"
                                            name="otp"
                                            id="otp"
                                            value={OTP}
                                            className="form-control"
                                            placeholder="OTP"
                                            style={stylingOt}
                                            onChange={e => [setOTP(e.target.value), setstylingBtn({ display: 'block' })]}
                                        /> </div >
                                    <input name="login"
                                        id="login"
                                        className="btn btn-block login-btn mb-4"
                                        type="button"
                                        value="Login"
                                        style={stylingBtn}
                                        onClick={handleOnLogin}
                                    /></form > <br />
                                <a href="/"
                                    className="login-card-footer-text" > Resend OTP </a> <nav className="login-card-footer-nav" >
                                    <a href="/" > Terms of use. </a> <a href="/" > Privacy policy </a> </nav>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </main>
    </div>
    )
}