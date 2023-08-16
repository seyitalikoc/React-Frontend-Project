import { useNavigate } from 'react-router-dom';
import { Nav, NavLink, NavLinkLogin, NavMenu } from './NavbarElements.ts';


const Navbar = () => {
    const navigate = useNavigate(); // sayfa yönlendirme
    if(localStorage.getItem('isLogin') === 'true'){
        return (
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
                    <NavLinkLogin className="border-left pl-2 ml-auto" to="/" id="login" onClick={function (){
                        localStorage.clear();
                        localStorage.setItem('isLogin','false');
                        navigate('/');
                        window.location.reload();
                    }} >
                        Log-out
                    </NavLinkLogin>
                    <NavLink className="border-left pl-2 ml-auto" to="/profile">
                        {localStorage.getItem('username')?.replaceAll('"','')}
                    </NavLink>
                </NavMenu>
            </Nav>
        )
    }
    else{
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
                    <NavLinkLogin className="border-left pl-2 ml-auto" to="/login">
                        Log-in
                    </NavLinkLogin>
                    <NavLink className="border-left pl-2 ml-auto" to="/signup">
                        Sign-up
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
    }
    
};
 
export default Navbar;