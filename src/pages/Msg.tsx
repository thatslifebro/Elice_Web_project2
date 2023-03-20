import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AxiosError } from 'axios';
import { customAxios } from '../utils/customAxios';

interface FormValue {
    content: string;
    // receiverId: number;
}

function Msg() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValue>();

    const onSubmitHandler: SubmitHandler<FormValue> = async (data) => {
        try {
            customAxios
            .post('/api/letters', data)
            .then((response) => response.data)
            .then((data) => {
                if (data.data === 'OK') {
                    alert('정상적으로 가입되었습니다.');
                }
            })
        } catch (error) {
            console.error(error);
            if (error instanceof AxiosError)
                alert(error.response?.data.errorMessage);
        }
    };

    return (
        <>
            <div className='flex items-center justify-center p-5' style={{height: '51.7rem'}}>
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

                    <form onSubmit={handleSubmit(onSubmitHandler)} className='w-full'>
                        <input 
                            {...register('content', {
                            required: true,
                            minLength: 1,
                            maxLength: 200,
                            })}
                            className='h-16 w-5/6 m-3 border-solid border border-gray-300 rounded-md'
                        />
                        <button className=''>보내기</button>
                    </form>
                    {errors.content?.type === 'minLength' &&
                    '최소 1자부터 입력할 수 있습니다!'}
                    {errors.content?.type === 'maxLength' &&
                    '최대 200자까지 입력할 수 있습니다!'}
                </div>
            </div>
        </>
    );
}

export default Msg;