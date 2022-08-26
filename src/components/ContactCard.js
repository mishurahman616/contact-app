import React from "react";

const ContactCard = (props) =>{
    const {id, name, email} = props.contact;
    return(
        <div className="item">
        <div class="right floated content">
            <i className="trash alternate outline icon" style={{color:"red", marginTop: "5px"}}></i>
        </div>
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
        </div>

    </div>
    );
}
export default ContactCard;