import React from 'react';

const Link = ({route}) => {
    return (
        <li className='px-4 hover:bg-amber-100'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;