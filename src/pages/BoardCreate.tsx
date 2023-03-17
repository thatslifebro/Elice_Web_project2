import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { customAxios } from "../utils/customAxios";

const BoardCreate: React.FC = ()=>{
    type PostForm={
        title: string,
        content: string,
        totalCount: number
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<PostForm>();

    const onSubmit: SubmitHandler<PostForm> = data => {
        customAxios
            .post(`/api/boards`,data)
            .then((response) => response.data)
            .then(()=>{
                // navigate
            })
            .catch((error) => {
                alert(error.response.data.errorMessage);
            });
    };
    return (
        
        <div>
            
            <div className="border-solid py-10 mx-32 my-20 bg-slate-100">
                <form onSubmit={handleSubmit(onSubmit)} className="block max-w-6xl mx-auto my-3 p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="mt-3">
                        <label  className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">제목</label>
                        <input className="block p-2.5 m-auto w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title" {...register("title",{required:true})}></input>
                        {errors.title && <span>This field is required</span>}
                    </div>
                    <div className="mt-3">
                        <label  className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">내용</label>
                        <input className="block p-2.5 m-auto w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="content" {...register("content",{required:true})}></input>
                        {errors.content && <span>This field is required</span>}
                    </div>
                    <div className="mt-3">
                        <label  className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">전체 인원</label>
                        <input className="block p-2.5 m-auto w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="content" {...register("totalCount",{required:true, pattern: /[\d]{1,2}/})}></input>
                        {errors.totalCount && <span>number is required</span>}
                    </div>
                    <div className="text-right mt-5"><button type="submit" className="rounded-full text-lg bg-slate-300 p-3 ml-3">등록하기</button></div>
                </form>
            </div>
        </div>
        
    )
}

export default BoardCreate;

// {/* <form onSubmit={handleSubmit(onSubmit)}>
//             {/* register your input into the hook by invoking the "register" function */}
//             <input defaultValue="test" {...register("title",{required:true})} />
//             {errors.title && <span>This field is required</span>}
//             {/* include validation with required or other standard HTML validation rules */}
//             <input {...register("content", { required: true })} />
//             {/* errors will return when field validation fails  */}
//             {errors.content && <span>This field is required</span>}
//             aslkjdflksdjlk
//             <input type="submit" />
//             </form> */}