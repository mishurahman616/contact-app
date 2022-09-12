import React from "react";
import { Link } from "react-router-dom";
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
            <Link to={`/contact/${id}`} state={{contact: props.contact}}>
                <div className="header">{name}</div>
                <div>{email}</div>
            </Link>

        </div>
            <div className="ui basic modal">
                <div className="ui icon header">
                    <i className="archive icon"></i>
                    Archive Old Messages
                </div>
                <div className="content">
                    <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
                </div>
                <div className="actions">
                    <div className="ui red basic cancel inverted button">
                    <i className="remove icon"></i>
                    No
                    </div>
                    <div class="ui green ok inverted button">
                    <i class="checkmark icon"></i>
                    Yes
                    </div>
                </div>
            </div>
    </div>
    );
}
export default ContactCard;