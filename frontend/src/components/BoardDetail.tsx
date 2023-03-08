import React from "react";
import queryString from 'query-string';

const BoardDetail: React.FC = ()=>{
    const qs = queryString.parse(window.location.search);
    console.log(qs.id)
    return (
<div className="mx-40 my-32">
    <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
            <p className="text-2xl">한강공원 일요일 10시에 같이 가실 분 구해용</p>
            <span className="text-sm mr-5">회원1</span>
            <span className="text-sm">2023.03.08 17:54</span>
        </div>
        <div>
            <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">참가하기</button>
        </div>
    </div>
    <hr />
    <div className="grid grid-cols-4 gap-4 mt-5">
        <div className="col-span-3">
            <p className="text-xl m-10"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati reprehenderit illum deleniti alias est ex, magnam, inventore dolores excepturi voluptas? Harum nemo labore quas vitae saepe, vel quam omnis!</p>
        </div>
        <div>
            <table>
                <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            참가자 명단
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4">
                            회원1
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className="grid grid-cols-4 gap-4 mt-5">
        <ul className="inline-flex items-center ">
            <li>
                <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">목록</button>
            </li>
            <li>
                <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">수정</button>
            </li>
            <li>
                <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">삭제</button>
            </li>
        </ul>
    </div>

    <div className="border-solid border border-black">

    </div>
    
</div>

    )
}

export default BoardDetail;