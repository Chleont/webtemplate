import React, { useContext } from 'react';
import { render } from '/src/context';

export function HomeSection({ children }) {
    const mobile = useContext(render).isMobile;
    const headerHeight = useContext(render).headerHeight;
    return (
        <div key='home' id='home' style={{ height: mobile ? window.innerHeight - headerHeight + 'px' : window.innerHeight + 'px' }} className='w-full'>
            {children}
        </div>
    );
}

export function Section({ children }) {
    return (
        <div key='sec' id='sec' style={{ height: window.innerHeight, }} className='w-full'>
            {children}
        </div>
    );
}