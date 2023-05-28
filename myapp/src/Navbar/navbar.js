import { NavbarMenuIcon } from './navbarMenu';
import { NavbarCartIcon } from './navbarCart';

export default function Navbar() {



    return (
        <nav className="navbar">
            <div className="navbar-container">
                <NavbarMenuIcon/>
                <p className="navbar-title">Insta Shop</p>
                <NavbarCartIcon/>

            </div>
        </nav>

    );
}