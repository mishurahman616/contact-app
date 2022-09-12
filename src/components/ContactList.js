//functional component example - Contact List

import React, {useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) =>{
    const inputEl = useRef("");
    const contactDeleteHandler=(id)=>{
        props.getContactId(id);
    }
    const renderContactList = props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} clickHandler={contactDeleteHandler}  key={contact.id}/>
        )
    });
    const getSearchTerm = ()=>{
        props.searchKeyword(inputEl.current.value);
    }
    return(
        <div className="main">
            <h2>Contact List
                <Link to="/add">
                    <button  className="ui button blue right floated">Add Contact</button>
                </Link>
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input
                    ref={inputEl} type="text" placeholder="Search Contacts" className="prompt" value={props.term} onChange={getSearchTerm}/>
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui middle aligned divided list">
                {renderContactList.length >0?renderContactList:`No contact found similar to "${props.term}"`}
            </div>
        </div>
    );
}
export default ContactList;