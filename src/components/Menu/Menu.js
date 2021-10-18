import { NavLink } from 'react-router-dom';

import routes from '../../constants/routes';
import './Menu.scss';


const Menu = () => (
    <ul className="menu">
        <li className="menu__item">
            <NavLink
                to={routes.MAIN}
                className="menu__item-link"
                activeClassName="menu__item-link--active"
                exact
            >
                Home
            </NavLink>
        </li>
        <li className="menu__item">
            <NavLink
                to={routes.VARIABLES}
                className="menu__item-link"
                activeClassName="menu__item-link--active"
            >
                Variables
            </NavLink>
        </li>
    </ul>
);


export default Menu;
