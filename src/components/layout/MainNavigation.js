import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css'

function MainNavigation() {

return (
    <header className={classes.header}> 
        <div className={classes.logo }> Shopping Store</div>
        <nav>
            <ul>
                <li> 
                    <Link to='/'> Groceries </Link>
                </li>
                <li> 
                    <Link to='/newmeetup'> Frozen </Link>
                </li>
                <li> 
                    <Link to='/favorite'> Clothing </Link>
                </li>
            </ul>
        </nav>
    </header>

);
}



export default MainNavigation;