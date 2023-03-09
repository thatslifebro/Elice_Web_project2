import React from "react";

const BoardUpdate: React.FC = ()=>{
    

    return (
        <div className="border-solid py-10 mx-32 my-20 bg-slate-100">
            <div className="block max-w-6xl mx-auto my-3 p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                
                
                    <div className="mt-3">
                        <label  className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">제목</label>
                        <textarea className="block p-2.5 m-auto w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title"></textarea>
                    </div>
                    <div className="mt-3">
                        <label  className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">내용</label>
                        <textarea className="block p-2.5 m-auto w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="content"></textarea>
                    </div>
                    <div className="text-right mt-5"><button className="rounded-full text-lg bg-slate-300 p-3 ml-3">수정하기</button></div>
                </div>
            </div>
        
    )
}

export default BoardUpdate;