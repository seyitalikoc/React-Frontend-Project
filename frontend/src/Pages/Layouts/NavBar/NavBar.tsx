import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css';


export default class NavBar extends React.Component {
    
    render() {
        
        if(localStorage.getItem('logincontrol')?.replaceAll('"','') === 'true'){
            return (
                <nav className='Nav'>
                    <div className='NavMenu'/*left menu */> 
                        <Link to={'/'} className='NavLink'>
                            <img src="https://img.icons8.com/?size=512&id=118937&format=png" 
                                alt="HOME"
                                className='Icon'
                            />
                             HOME
                        </Link>
                        <Link to={'/token'} className='NavLink'>
                            
                            TOKEN
                        </Link>
                        <Link to={'/users'} className='NavLink'>
                            USERS
                        </Link>
                    </div>
                    <div className='NavMenu' /*right menu */>
                        <Link to={'/login'} className='NavLink'>
                            <img src='https://img.icons8.com/?size=512&id=26211&format=png'
                                alt='TOKEN'
                                className='Icon'
                            />
                            LOG-OUT
                        </Link>
                        <Link to={'/signup'} className='NavLink'>
                            {localStorage.getItem('username')?.replaceAll('"','').toUpperCase()}
                        </Link>
                    </div>
                </nav>
            )
        }

        return (
            <nav className='Nav'>
                <div className='NavMenu'/*left menu */> 
                    <Link to={'/'} className='NavLink'>
                        <img src="https://img.icons8.com/?size=512&id=118937&format=png" 
                            alt="HOME"
                            className='Icon'
                        />
                         HOME
                    </Link>
                    <Link to={'/token'} className='NavLink'>
                        
                        TOKEN
                    </Link>
                    <Link to={'/users'} className='NavLink'>
                        USERS
                    </Link>
                </div>
                <div className='NavMenu' /*right menu */>
                    <Link to={'/login'} className='NavLink'>
                        <img src='https://img.icons8.com/?size=512&id=26211&format=png'
                            alt='TOKEN'
                            className='Icon'
                        />
                        LOG-IN
                    </Link>
                    <Link to={'/stripe'} className='NavLink'>
                        SIGN-UP
                    </Link>
                </div>
            </nav>
        )
    }
}