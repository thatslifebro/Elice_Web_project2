import React, { useEffect } from "react";
import queryString from 'query-string';
import { Link } from "react-router-dom";
import { atom, useRecoilState } from "recoil";
import { api } from "../utils/customAxios";
import { Post } from "./BoardList";

export const postState = atom<Post>({
    key:"post",
    default:{
            _id: 1,
            title: "null",
            content: "null",
            participantInfo:{
                totalCount:10,
                currentCount:2,
                userIdList: ["user1","user2"]
            },
            authorId:"1111",
            createdAt: new Date(),
            isDeleted: false,
            __v: 0
        },
    
});

const BoardDetail: React.FC = ()=>{

    const clickBoardList =(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        window.location.replace('/board');
    }

    const clickUpdate = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        window.location.replace(`/board/update?id=${qs.id}`);
    }
    const clickDelete = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        api
        .delete(`/api/boards/${qs.id}`)
        .then(response=>response.status)
        .then((data)=>{
            if(data===200){
                window.location.replace('/board');
            }
            else{
                alert("삭제할 수 없습니다.")
            }
        })
        .catch((error)=>{
            alert(error.response.data.errorMessage);
        })
    }

    const qs = queryString.parse(window.location.search);

    const [post, setPost]= useRecoilState(postState);

    const getPost=()=>{
        api
            .get(`/api/boards/${qs.id}`)
            .then((response) => response.data.data)
            .then((data) => {
                    setPost(data);
                }
            )
            .catch((error) => {
                alert(error.response.data.errorMessage);
            });
    }


    useEffect(()=>{
        getPost()
        
    },[])

    return (
<div className="mx-40 my-32">
    <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
            <p className="text-2xl">{post.title}</p>
            <span className="text-sm mr-5">{post.authorId}</span>
            <span className="text-sm">{String(post.createdAt)}</span>
        </div>
        <div>
            <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">참가하기</button>
        </div>
    </div>
    <hr />
    <div className="grid grid-cols-4 gap-4 mt-5">
        <div className="col-span-3">
            <p className="text-xl m-10"> {post.content}</p>
        </div>
        <div>
            <table>
                <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            참가자 ( {post.participantInfo.currentCount} / {post.participantInfo.totalCount})
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {post.participantInfo.userIdList.map((id)=>{
                        return(
                            <tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4">
                            {id}
                        </td>
                    </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    </div>
    <div className="grid grid-cols-4 gap-4 mt-5">
        <ul className="inline-flex items-center ">
            <li>
                <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={clickBoardList}>목록</button>
            </li>
            <li>
                <Link to="/board/update"><button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={clickUpdate}>수정</button></Link>
            </li>
            <li>
                <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={clickDelete}>삭제</button>
            </li>
        </ul>
    </div>

    <div className="border-solid py-10 mx-32 my-20 bg-slate-100">
        <div className="block max-w-6xl mx-auto my-3 p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="text-left">
                <p className="text-xl">회원1</p>
                <p className="text-sm">2023.03.09 15:23</p>
            </div>
            <div className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <p className="text-lg text-left">혹시 근처에서 같이 출발하실 분 있으실까요? 저는 평양에서 출발해요! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque recusandae distinctio quas eveniet, veniam iusto, quae nam illo harum amet quasi rem ipsum itaque beatae, voluptas consequuntur excepturi quos nobis!</p>
            </div>
        </div>
        <div className="block max-w-6xl mx-auto my-3 p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="text-left">
                <p className="text-xl">회원2</p>
                <p className="text-sm">2023.05.09 15:23</p>
            </div>
            <div className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <p className="text-lg text-left">저는 함경북</p>
            </div>
            <div className="text-right">
                <button className="rounded-full bg-sky-200 p-1">수정</button>
                <button className="rounded-full bg-sky-200 p-1">삭제</button>
            </div>
        </div>
        
        <div className="block max-w-6xl mx-auto my-3 p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            
            <div className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <textarea className="block p-2.5 m-auto w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                <div className="text-right"><button className="rounded-full bg-sky-200 p-1 ml-3">등록</button></div>
            </div>
        </div>
    </div>
    
</div>

    )
}

export default BoardDetail;