//functional component example - Contact add form
import React, {useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
const EditContact = (props) => {
    const location = useLocation();
    const {id, name, email}=location.state.contact;
    let navigate = useNavigate();

    const [editedName, setName] = useState(name);
    const [editedEmail, setEmail] = useState(email);
    const update = (e) =>{
        e.preventDefault();
        if(editedName==="" || editedEmail ===""){
            alert("All fields are mandatory");
            return;
        }
        props.updateContactHandler({id:id, name:editedName, email:editedEmail})
        setName("");
        setEmail("");
        return navigate('/');
    }

    return (
        <div className="ui main">
            <h2>Update Contact</h2>
            <form className="ui fluid form" onSubmit={update}>
                <div className="ui divider"></div>
                <div className="field" placeholder="Last Name">
                    <div className="ui pointing below blue basic label">
                        Please Update Name 
                    </div>
                    <input type="text" name="name"  value={editedName} placeholder="Name" onChange={(e)=>setName(e.target.value)} required />
                </div>
                <div className="field" placeholder="Last Name">
                    <div className="ui pointing below blue basic label">
                        Please Update Email 
                    </div>
                    <input type="email" name="email" value={editedEmail} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required />
                </div>
                <button className="ui primary button"> Update </button>

            </form>
        </div>

            );
}
export default EditContact;