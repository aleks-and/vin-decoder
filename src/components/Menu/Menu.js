import { NavLink } from 'react-router-dom';

import routes from '../../constants/routes';


const Menu = () => (
    <ul>
        <li>
            <NavLink to={routes.MAIN} activeClassName='active' exact>Home</NavLink>
        </li>
        <li>
            <NavLink to={routes.VARIABLES} activeClassName='active'>Variables</NavLink>
        </li>
    </ul>
);


export default Menu;
