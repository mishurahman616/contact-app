//functional component example - Contact List

import React from "react";
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
            <div className="ui middle aligned divided list">
                {renderContactList}
            </div>
    );
}
export default ContactList;