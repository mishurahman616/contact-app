import React from "react";
import userIcon from './../images/user.png';
const ContactCard = (props) =>{
    const {id, name, email} = props.contact;
    return(
        <div className="item">
        <div className="right floated content">
            <i className="trash alternate outline icon" style={{color:"red", marginTop: "5px"}} onClick={()=>props.clickHandler(id)}></i>
        </div>
        <img className="ui mini avater image" src={userIcon} alt="user" />
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
        </div>

    </div>
    );
}
export default ContactCard;