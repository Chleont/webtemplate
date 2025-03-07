import React from 'react';
import { Section } from '../blogSections';
import Background from '/src/images/home-bg.png';

export function Sec() {
    return (
        <Section>
            <div style={{
                backgroundImage: 'url(' + Background + ')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '80%',
                backgroundPosition: 'center 5vh'
            }}
                className='h-full w-full bg-red-200'>
                asdasdasdasdasdas
            </div>
        </Section>
    );
}
export default Sec;