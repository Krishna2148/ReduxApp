import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <ul className="nav justify-content-center fs-4 bg-dark">
                <li className="nav-item">
                    <Link className="nav-link text-white" aria-current="page" to="#">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Cart</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar