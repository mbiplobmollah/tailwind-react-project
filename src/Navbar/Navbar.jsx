import React, { useState } from 'react';
import Link from './Link';
import { AlignJustify, X } from 'lucide-react';
const navigationLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "FAQ", path: "/faq" },
  ];
  

const Navbar = () => {

    const [open,setOpen] = useState(false)

    const links = navigationLinks.map(route =><Link key={route.id} route={route}></Link>) 

    return (
        <nav className='flex justify-between items-center mx-8 mt-3'>
        <span className='flex items-center gap-4' onClick={()=>{setOpen(!open)}}>
            {
                open ? <X className='md:hidden'/> : <AlignJustify className='md:hidden'/>
            }
            <ul className={`md:hidden absolute duration-1000 ${open ? 'top-15 left-13' : '-top-40 left-13'} p-4 rounded-lg  bg-gray-400`}>
                {
                    links
                }
            </ul>
        <h3 className='text-2xl font-bold'>My Navbar</h3>
        </span>

        <ul className='md:flex hidden gap-8'>
        {
           links
        }
        </ul>


        <button className='btn'>Subscribe</button>

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