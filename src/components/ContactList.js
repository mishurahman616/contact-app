//functional component example - Contact List

import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) =>{
    const renderContactList = props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} />
        )
    });
    return(
            <div className="ui middle aligned divided list">
                {renderContactList}
            </div>
    );
}
export default ContactList;