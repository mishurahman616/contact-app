//functional component example - Contact add form
import React from "react";
const AddContact = () => {
    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form class="ui fluid form">
                <div className="ui divider"></div>
                <div className="field" placeholder="Last Name">
                    <div className="ui pointing below blue basic label">
                        Please Enter Your Name
                    </div>
                    <input type="text" name="name" placeholder="Name"/>
                </div>
                <div className="field" placeholder="Last Name">
                    <div className="ui pointing below blue basic label">
                        Please Enter Your Email
                    </div>
                    <input type="email" name="email" placeholder="Email"/>
                </div>
                <button className="ui primary button"> Add </button>

            </form>
        </div>

            );
}
export default AddContact;