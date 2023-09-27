import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    return (
        <>
            <Link className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/">
                Home
            </Link>
            <Link className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/">
                About us
            </Link>
            <Link className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/">
                Contact us
            </Link>
        </>
    )
}

export default NavLinks;