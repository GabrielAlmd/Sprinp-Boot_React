import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <h1 className='navbar-brand '>Spring Boot Aplication</h1>
                    <div className='d-flex'>
                        <div className='btn-group btn-group-sm'>
                            <Link className='btn btn-outline-light' to="/">Search</Link>
                            <Link className='btn btn-outline-light' to="/allPrices">View Prices</Link>
                            <Link className='btn btn-outline-light' to="/addPrice">Add Prices</Link>
                        </div>
                    </div>
                </div>
            </nav>
            
        </div>
    );
}
