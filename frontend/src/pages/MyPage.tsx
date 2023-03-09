import React from 'react';
import { Link } from 'react-router-dom';

function MyPage() {
    return (
        <>
            <div className='px-14 py-10 w-4/12 mx-auto mt-[10rem] mb-16 border-solid border border-gray-800/10 rounded-3xl shadow-2xl'>
                <div className='bg-gray-600 h-[120px] -mt-10 mb-5 -mx-14 rounded-t-3xl flex justify-center items-center flex-col'>
                    <p className='text-white text-center text-lg'>오손도손</p>
                    <p className='text-white text-center'>oson@doson.com</p>
                </div>
                <form>
                    {/* <div className='mb-6'>
                        <label
                            htmlFor='email'
                            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        >
                            email
                        </label>
                        <input
                            type='email'
                            id='email'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            value={'oson@doson.com'}
                            required
                            disabled
                        />
                    </div> */}
                    <div className='mb-6'>
                        <label
                            htmlFor='nickname'
                            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        >
                            nickname
                        </label>
                        <input
                            type='text'
                            id='nickname'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            defaultValue={'오손도손'}
                            required
                        />
                    </div>
                    <div className='mb-6'>
                        <label
                            htmlFor='password'
                            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        >
                            password
                        </label>
                        <input
                            type='password'
                            id='password'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            required
                        />
                    </div>
                    <div className='mb-6'>
                        <label
                            htmlFor='confirm-password'
                            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        >
                            confirm password
                        </label>
                        <input
                            type='password'
                            id='confirm-password'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            required
                        />
                    </div>
                    <div className='mb-6'>
                        <label
                            htmlFor='gender'
                            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        >
                            gender
                        </label>

                        <div className='flex items-center mb-4'>
                            <div className='w-1/2 flex'>
                                <input
                                    id='country-option-1'
                                    type='radio'
                                    name='countries'
                                    value='USA'
                                    className='self-center w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600'
                                    checked
                                />
                                <label
                                    htmlFor='country-option-1'
                                    className='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                                >
                                    남자
                                </label>
                            </div>
                            <input
                                id='country-option-2'
                                type='radio'
                                name='countries'
                                value='Germany'
                                className='w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600'
                            />
                            <label
                                htmlFor='country-option-2'
                                className='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                            >
                                여자
                            </label>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <label
                            htmlFor='birthdate'
                            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        >
                            birthdate
                        </label>
                        <input
                            type='date'
                            id='birthdate'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            required
                        />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <button
                            type='submit'
                            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        >
                            수정
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default MyPage;
