import React from "react";

const Board: React.FC = ()=>{
    return (
<div className="mx-40 my-32">
    <div className="grid grid-cols-7 gap-4">
        <div className="col-span-2">01</div>
        <div className="col-span-5">09</div>
    </div>
</div>

    )
}

export default Board;