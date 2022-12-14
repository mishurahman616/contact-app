import React from "react";
import { Link } from "react-router-dom";
import userIcon from './../images/user.png';
const ContactCard = (props) =>{
    const {id, name, email} = props.contact;
    return(
        <div className="item">
        <div className="right floated content">
           <Link to={`/edit/${id}`} state={{contact: props.contact}}>
            <i className="edit alternate outline icon" style={{color:"blue", marginTop: "5px"}}></i>
           </Link>
            <i className="trash alternate outline icon" style={{color:"red", marginTop: "5px", marginLeft:"10px"}} onClick={()=>props.clickHandler(id)}></i>
        </div>
        <img className="ui mini avater image" src={userIcon} alt="user" />
        <div className="content">
            <Link to={`/contact/${id}`} state={{contact: props.contact}}>
                <div className="header">{name}</div>
                <div>{email}</div>
            </Link>

        </div>
    </div>
    );
}
export default ContactCard;