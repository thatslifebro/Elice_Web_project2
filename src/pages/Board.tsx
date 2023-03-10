import React from "react";
import BoardList from '../components/BoardList'
import BoardDetail from "../components/BoardDetail";
import queryString from 'query-string';

const Board: React.FC = ()=>{
    const qs = queryString.parse(window.location.search);
    let idExist = false;
    if(Object.keys(qs).length === 0){
        idExist = false;
    }
    else if(qs.id){
        idExist = true;
    }

    return idExist?(<BoardDetail/>):(<BoardList />);

}

export default Board;