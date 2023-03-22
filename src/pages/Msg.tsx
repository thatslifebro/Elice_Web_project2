import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { api } from '../utils/customAxios';

interface FormValue {
    content: string;
    receiverId: number;
}

function Msg() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValue>();
    
    const [Msg, setMsg] = useState([]);
    const [Update, setUpdate] = useState(0);
    let i = 1;
    const user = JSON.parse(localStorage.getItem('user') || 'Anonymous');

    const getMsg = async ()=>{
        try {
            const Inmsg = await api.get(`api/users/${user.id}/letters/inbox?page=1&limit=30`);
            const Outmsg = await api.get(`api/users/${user.id}/letters/outbox?page=1&limit=30`);
            let res = [];
            if (Inmsg.data.data) {
                res = Inmsg.data.data.concat(Outmsg.data.data);
            }
            else if (Outmsg.data.data) {
                res = Outmsg.data.data.concat(Inmsg.data.data);
            }
            res = res.filter((element: Object) => element !== undefined);
            setMsg(res);
        } catch (error : any) {
            alert("Invalid request");
        }
    };

    const deleteInbox = async (userId: number, id: number)=>{
        try {
            const response = await api.delete(`api/users/${userId}/letters/${id}/inbox`);
            setUpdate(i);
            i = i + 1;
        } catch (error : any) {
            alert("Invalid request");
        }
    };

    const deleteOutbox = async (userId: number, id: number)=>{
        try {
            const response = await api.delete(`api/users/${userId}/letters/${id}/outbox`);
            setUpdate(i);
            i = i + 1;
        } catch (error : any) {
            alert("Invalid request");
        }
    };

    useEffect(()=>{
        getMsg();
    }, [Update]);

    const onSubmitHandler: SubmitHandler<FormValue> = async (data) => {
        try {
            data.receiverId = 30;
            const response = await api.post(`/api/users/${user.id}/letters`, data);
            window.location.replace("/msg")
        } catch (error : any) {
            alert("Invalid request");
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
                        {Msg &&
                            Msg.map((msg: {content: string, id: number, authorId: number, receiverId: number})=>{
                                console.log(Msg)
                                return(
                                    <div className='m-3'>
                                        <div className='flex place-content-between'>
                                            {msg.receiverId === user.id ?
                                                <div className='text-xs font-semibold text-yellow-500'>받은 쪽지</div> :
                                                <div className='text-xs font-semibold text-green-500'>보낸 쪽지</div>
                                            }
                                            {msg.receiverId === user.id ?
                                                <button onClick={() => deleteInbox(msg.receiverId, msg.id)}className='text-xs text-red-700'>받은 삭제</button> :
                                                <button onClick={() => deleteOutbox(msg.authorId, msg.id)}className='text-xs text-red-700'>보낸 삭제</button>
                                            }
                                        </div>
                                        <div className='text-base truncate'>{msg.content}</div>
                                    </div>                             
                                )
                            })
                        }

                    <form onSubmit={handleSubmit(onSubmitHandler)} className='w-full'>
                        <input 
                            {...register('content', {
                            required: true,
                            minLength: 1,
                            maxLength: 200,
                            })}
                            className='h-16 w-5/6 m-3 border-solid border border-gray-300 rounded-md'
                        />
                        <button>보내기</button>
                    </form>
                    {/* {errors.content?.type === 'minLength' &&
                    '최소 1자부터 입력할 수 있습니다!'}
                    {errors.content?.type === 'maxLength' &&
                    '최대 200자까지 입력할 수 있습니다!'} */}
                </div>
            </div>
        </>
    );
}

export default Msg;