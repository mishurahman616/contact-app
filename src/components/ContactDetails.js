import React from "react";
import { Link, useLocation } from "react-router-dom";
import userImage from './../images/user.png';

const ContactDetails = (props)=>{

    const location = useLocation();
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image" style={{margin:"10px 10px"}}>
                    <img src={userImage} alt ="user" />
                </div>
                <div className="content">
                    <div className="header">{location.state.contact.name}</div>
                    <div className="description">{location.state.contact.email}</div>
                </div>
            </div>
            <div className="ui centered aligned grid">
                <div className="row">
                    <Link to="/">
                        <button className="ui button blue center aligned">Back to Contact List</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ContactDetails;