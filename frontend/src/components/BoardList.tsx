import React from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import queryString from 'query-string'


const BoardList: React.FC = ()=>{
    const navigate = useNavigate();
    const link = ()=>{
        window.location.replace('/board?id=1');
    }

    const qs = queryString.parse(window.location.search);

    return (
        <div className="mx-40 my-32">
        <div className="text-right">
            <Link to="/board/create"><button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">글 작성하기</button></Link>
        </div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        번호
                    </th>
                    <th scope="col" className="px-6 py-3">
                        제목
                    </th>
                    <th scope="col" className="px-6 py-3">
                        작성자
                    </th>
                    <th scope="col" className="px-6 py-3">
                        작성시간
                    </th>
                    <th scope="col" className="px-6 py-3">
                        참가인원
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">참가하기</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" onClick={link}>
                        <td className="px-6 py-4">
                            1
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            한강공원 일요일 10시에 같이 가실 분 구해용
                        </th>
                        <td className="px-6 py-4">
                            회원1
                        </td>
                        <td className="px-6 py-4">
                            createdAt
                        </td>
                        <td className="px-6 py-4">
                            3 / 8
                        </td>
                        <td className="px-6 py-4 text-right">
                            <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">참가하기</button>
                        </td>
                    </tr>
                
            </tbody>
        </table>



    </div>
            <div className="m-5">
                <nav aria-label="Page navigation example " className="text-center">
                      <ul className="inline-flex items-center -space-x-px " >
                                  <li>
                      <a href="#" className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Previous</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      </a>
                                  </li>
                                  <li>
                      <a className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                  </li>
                                  <li>
                      <a className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                  </li>
                                  <li>
                      <a aria-current="page" className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                  </li>
                                  <li>
                      <a className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                                  </li>
                                  <li>
                      <a className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                                  </li>
                                  <li>
                      <a className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Next</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                      </a>
                                  </li>
                      </ul>
                
                </nav>
            </div>
        </div>
    )
}

export default BoardList;