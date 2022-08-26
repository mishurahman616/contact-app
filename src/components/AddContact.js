//functional component example - Contact add form
import React, {useState} from "react";
const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const add = (e) =>{
        e.preventDefault();
        if(name=="" || email ==""){
            alert("All fields are mandatory");
            return;
        }

    }
    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form class="ui fluid form" onSubmit={add}>
                <div className="ui divider"></div>
                <div className="field" placeholder="Last Name">
                    <div className="ui pointing below blue basic label">
                        Please Enter Your Name <span style={{color:"red"}}>*</span>
                    </div>
                    <input type="text" name="name"  value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)} required />
                </div>
                <div className="field" placeholder="Last Name">
                    <div className="ui pointing below blue basic label">
                        Please Enter Your Email <span style={{color:"red"}}>*</span>
                    </div>
                    <input type="email" name="email" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required />
                </div>
                <button className="ui primary button"> Add </button>

            </form>
        </div>

            );
}
export default AddContact;