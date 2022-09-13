import React from "react";
import { Route, Switch, Link} from 'react-router-dom';


function Header() {
    return (
        <div>
            <ul className="list">
                <li>
                    <Link to="/home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        about
                    </Link>
                </li>
                <li>
                    <Link to="/kek">KEK</Link>
                </li>
            </ul>
        </div>




    );


}

export default Header;