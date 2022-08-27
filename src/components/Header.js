//class component example - Header
import react from 'react';
class Header extends react.Component{
    render(){
        return(
            <div className="ui one item menu">
                <h2 className="item">
                    Contact Manager
                </h2>
            </div>
        )
    }
}
export default Header;