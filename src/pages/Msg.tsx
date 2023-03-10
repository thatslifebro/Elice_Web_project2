import React from 'react';

function Msg() {
    return (
        <>
            <div className='flex items-center justify-center p-5' style={{height: '51.8rem'}}>
                <div className='flex flex-col w-1/5 h-full p-3 mx-2 border-solid border border-gray-300 rounded-md'>
                    <div className='text-xl font-bold m-2 border-solid border-b border-black'>쪽지함</div>
                    <div className='m-3'>
                        <div className='flex place-content-between'>
                            <div className='text-xs font-semibold'>익명</div>
                            <div className='text-xs'>23/09/03 18:05</div>
                        </div>
                        <div className='text-base truncate'>안녕하세요~ ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</div>
                    </div>
                </div>
                <div className='flex flex-col w-1/2 h-full p-3 border-solid border border-gray-300 rounded-md'>
                    <div className='text-xl font-bold m-2 border-solid border-b border-black'>닉네임</div>
                    <div className='m-3'>
                        <div className='flex place-content-between'>
                            <div className='text-xs font-semibold text-yellow-500'>보낸 쪽지</div>
                            <div className='text-xs'>23/09/03 18:05</div>
                        </div>
                        <div className='text-base truncate'>안녕하세요~ ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</div>
                    </div>
                    <div className='m-3'>
                        <div className='flex place-content-between'>
                            <div className='text-xs font-semibold text-green-500'>받은 쪽지</div>
                            <div className='text-xs'>23/09/03 18:05</div>
                        </div>
                        <div className='text-base truncate'>반갑습니다~ ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Msg;