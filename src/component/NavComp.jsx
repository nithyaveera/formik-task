import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navcomp.css'

const NavComp = () => {
    return (
        <div className='container mt-1'>
            <nav class="navbar">
                <div class="container"  >
                    <ul class="navbar-nav "  >
                        <h1 className='wish'>Welcome</h1>
                        <li class="nav-item">
                            <h4 class="bar"><Link to='/'>Dashboard</Link></h4>
                        </li>
                        <li className="nav-item">
                            <h4 class="bar"><Link to='/create'>Add Books</Link></h4>
                        </li>
                        <li className="nav-item">
                            <h4 className="bar"><Link to='/cuurent' >My Current Book</Link></h4>
                        </li>
                        <li class="nav-item">
                            <h4 className='bar'><Link to='/previous'>My Previous Book</Link></h4>
                        </li>
                    </ul>

                </div>

            </nav>
        </div>
    );
};

export default NavComp;
