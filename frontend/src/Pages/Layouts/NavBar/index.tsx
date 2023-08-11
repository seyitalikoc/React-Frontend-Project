import { Nav, NavLink, NavLinkLogin, NavMenu } from './NavbarElements.ts';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/token">
                        Token Refresh
                    </NavLink>
                </NavMenu>
                <NavMenu>
                    <NavLink className="border-left pl-2 ml-auto" to="/profile">
                        Profile
                    </NavLink>
                    <NavLinkLogin className="border-left pl-2 ml-auto" to="/login" id="login">
                        Login
                    </NavLinkLogin>
                    <NavLink className="border-left pl-2 ml-auto" to="/signup">
                        Sign-up
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;