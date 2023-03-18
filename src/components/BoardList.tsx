import React, { useEffect, useMemo } from "react";
import { Link } from 'react-router-dom';
import queryString from 'query-string'
import { atom, useRecoilState } from "recoil";
import { api } from "../utils/customAxios";
import BoardListRow from "./BoardListRow";
import { isPropertyAccessExpression } from "typescript";
// import { atom, useRecoilState } from "recoil";
// import axios from 'axios';

type paginationProps = {
    num: number,
    limit: string
}

const PaginationDefault : React.FC<paginationProps> = ({num,limit})=>{
    return(
        <li>
            <a href={`/board?page=${num}&limit=${limit}`} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{num}</a>
        </li>
    )
}

const PaginationChecked : React.FC<paginationProps> = ({num,limit})=>{
    return(
        <li>
            <a href={`/board?page=${num}&limit=${limit}`} className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{num}</a>
        </li>
    )
}

export interface Participants {
        totalCount: number,
        currentCount: number,
        userIdList: string[]
    }

export interface Post {
        _id: number,
        title: string,
        content: string,
        participantInfo : Participants,
        authorId: string,
        createdAt: Date,
        isDeleted: boolean,
        __v: number,
    }

export const postListState = atom<Post[]>({
    key: "postList",
    default :[
        {
            _id: 1,
            title: "등록된 게시물이 없다",
            content: "등록된 게시물이 없다",
            participantInfo:{
                totalCount:10,
                currentCount:2,
                userIdList: ["user1","user2"]
            },
            authorId:"1111",
            createdAt: new Date(),
            isDeleted: false,
            __v: 0
        }
    ]
    // ,effects:[getPostList]
});


const BoardList: React.FC = ()=>{
    // const navigate = useNavigate();
    
    const page = useMemo(
    () => queryString.parse(window.location.search)["page"] as string || null,
    []);
    const limit = useMemo(
    () => queryString.parse(window.location.search)["limit"] as string || null,
    []);
    

    const [postList,setPostList]= useRecoilState(postListState);
   
    const getPostList =()=>{
        api
            .get(`/api/boards`)
            .then((response) => response.data.data)
            .then((data) => {
                const paginatedData :Array<Post[]> = [];
                let tempArray: Array<Post> = [];
                let l: number = 0;
                for(let oneRow of data){
                    tempArray.push(oneRow);
                    l+=1;
                    if(l>=Number(limit)){
                        paginatedData.push(tempArray);
                        tempArray=[];
                        l=0;
                    }
                }
                if(tempArray.length>0){
                    paginatedData.push(tempArray);
                }
                if(paginatedData.length<Number(page)){
                    window.location.replace(`/board?page=${paginatedData.length}&limit=${limit}`);
                }
                else{
                    setPostList(paginatedData[Number(page)-1]);
                }
            })
            .catch((error) => {
                alert(error.response.data.errorMessage);
            });
    }

    const checkQueryString = ():void=>{
        if(Number(page)<1 || Number(limit)<1){
            window.location.replace("/board?page=1&limit=10");
        }
    }


    useEffect(()=>{
        checkQueryString();
        getPostList();

    },[])

    const Pagination : React.FC = ()=>{
        if(page==='1'){
            return(
                <>
                    <PaginationChecked num={1} limit={limit?limit:String(10)} />
                    <PaginationDefault num={2} limit={limit?limit:String(10)} />
                    <PaginationDefault num={3} limit={limit?limit:String(10)} />
                    <PaginationDefault num={4} limit={limit?limit:String(10)} />
                    <PaginationDefault num={5} limit={limit?limit:String(10)} />
                </>
            )
        }
        else if(page==='2'){
            return(
                <>
                    <PaginationDefault num={1} limit={limit?limit:String(10)} />
                    <PaginationChecked num={2} limit={limit?limit:String(10)} />
                    <PaginationDefault num={3} limit={limit?limit:String(10)} />
                    <PaginationDefault num={4} limit={limit?limit:String(10)} />
                    <PaginationDefault num={5} limit={limit?limit:String(10)} />
                </>
            )
        }
        else {
            return(
                <>
                    <PaginationDefault num={Number(page)-2} limit={limit?limit:String(10)} />
                    <PaginationChecked num={Number(page)-1} limit={limit?limit:String(10)} />
                    <PaginationDefault num={Number(page)} limit={limit?limit:String(10)} />
                    <PaginationDefault num={Number(page)+1} limit={limit?limit:String(10)} />
                    <PaginationDefault num={Number(page)+2} limit={limit?limit:String(10)} />
                </>
            )
        }
    }

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
                
                    {postList.map(info=>{
                        return(
                            <BoardListRow
                            key={info._id}
                            _id={info._id}
                            title={info.title}
                            content={info.content}
                            participantInfo={info.participantInfo}
                            authorId={info.authorId}
                            createdAt={info.createdAt} 
                            __v={info.__v}
                            isDeleted={info.isDeleted} />
                        )
                    })}
                    
                
            </tbody>
        </table>



    </div>
            <div className="m-5">
                <nav aria-label="Page navigation example " className="text-center">
                      <ul className="inline-flex items-center -space-x-px " >
                                  <li>
                      <a href={`/board?page=${Number(page)-1}&limit=10`} className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Previous</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" ></path></svg>
                      </a>
                                  </li>
                        <Pagination />
                                  <li>
                      <a href={`/board?page=${Number(page)+1}&limit=10`} className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Next</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" ></path></svg>
                      </a>
                                  </li>
                      </ul>
                
                </nav>
            </div>
        </div>
    )
}

export default BoardList;