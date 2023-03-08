import React from 'react';

function Home() {
    return (
        <>
            <img src='river.jpg' alt='' className='opacity-30' />
            <span className='absolute top-[200px] left-16 text-6xl'>
                한강 드라이브 갈까요?
            </span>
            {/* <div
                className='w-full h-screen bg-no-repeat bg-cover opacity-30'
                style={{ backgroundImage: 'url(river.jpg)' }}
            ></div> */}
        </>
    );
}

export default Home;
