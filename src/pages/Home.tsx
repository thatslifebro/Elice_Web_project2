import React from 'react';
import TypeIt from "typeit-react";

function Home() {
    return (
        <>
            <img src='river.jpg' alt='' className='opacity-30' />
            <TypeIt
                className='absolute top-[200px] left-16 text-6xl'
                options={{
                strings: ["제목을 작성해주세요"],
                speed: 100,
                waitUntilVisible: true,
                }}
            />
        </>
    );
}

export default Home;
