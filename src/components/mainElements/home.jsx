import React, { useContext } from 'react';
import { render } from '/src/context';
import Background from '/src/images/home-bg.png';

export function Home() {
    const mobile = useContext(render).isMobile;
    const headerHeight = useContext(render).headerHeight;
    return (
        <div key='home' id='home' style={{
            backgroundImage: 'url(' + Background + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '80%',
            backgroundPosition: 'center 5vh',
            height: mobile ? window.innerHeight - headerHeight + 'px' : window.innerHeight + 'px'
        }} className='w-full bg-green-200'>
            asdasdadsadsada
        </div>
    );
}

export default Home;