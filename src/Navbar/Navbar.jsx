import React from 'react';
import Link from './Link';
const navigationLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "FAQ", path: "/faq" },
  ];
  

const Navbar = () => {
    return (
        <nav className='flex justify-center'>


        <ul className='flex gap-8'>
        {
         navigationLinks.map(route =><Link key={route.id} route={route}></Link>)   
        }
        </ul>

            {/* <ul className='flex gap-8'>
        {
            navigationLinks.map(route =><li className='mr-10'><a href={route.path}>{route.name}</a></li>)
        }
            </ul> */}


            {/* <ul className='flex'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}

        </nav>
    );
};

export default Navbar;