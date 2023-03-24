import React from 'react';
import TypeIt from 'typeit-react';

function Home() {
    return (
        <>
            <img src='run.jpg' alt='' className='opacity-90' />
            <TypeIt
                className='absolute top-[15%] left-[5%] text-6xl'
                options={{
                    strings: ['TIME TO NEW WAVE'],
                    speed: 100,
                    waitUntilVisible: true,
                }}
            />
        </>
    );
}

export default Home;
