//functional component example - Contact List

import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) =>{
    const contactDeleteHandler=(id)=>{
        props.getContactId(id);
    }
    const renderContactList = props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} clickHandler={contactDeleteHandler}  key={contact.id}/>
        )
    });
    return(
        <div className="main">
            <h2>Contact List
                <Link to="/add">
                    <button  className="ui button blue right floated">Add Contact</button>
                </Link>
            </h2>
            <div className="ui middle aligned divided list">
                {renderContactList}
            </div>
        </div>
    );
}
export default ContactList;