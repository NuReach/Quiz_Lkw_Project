import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getQuizId, insertQuiz, setShowQuizType } from '../../Slice/functionSlice';
import QAquiz from '../Quiz/QAquiz';
import QCMquiz from '../Quiz/QCMquiz';
import TFquiz from '../Quiz/TFquiz';
import OPquiz from '../Quiz/OPquiz';
import { useParams } from 'react-router-dom';

export default function CreateSidebar() {
    const dispatch = useDispatch();
    const title = "Create Quizzes";
    //step 1
    const showQuizType = useSelector((state)=>state.function.showQuizType);
    const showQuizTypeBtn = (e)=>{
        e.preventDefault();
        dispatch(setShowQuizType());
    };
    //step 2
    const addQuiz = (e,type)=>{
        e.preventDefault();
        if (type == "qna") {
            dispatch(insertQuiz({
                id:Date.now(),
                type:type, 
                quiz:{},
            }))
        } else if ( type == "tf" ) {
            dispatch(insertQuiz({
                id:Date.now(),
                type:type,
                quiz:{}
            }))   
        }else if (type == "qcm") {
            dispatch(insertQuiz({
                id:Date.now(),
                type:type,
                quiz:{}                     
            }))
        }else{
            dispatch(insertQuiz({
                id:Date.now(),
                type:"op",
                quiz:{}     
            }))
        };
        dispatch(setShowQuizType());
    };
    //step 3
    const quizzes = useSelector((state)=>state.function.quizzes);
    const findQuizId = (e,quizId)=>{
        e.preventDefault();
        dispatch(getQuizId({quizId:quizId}))
    };
    const quizId = useSelector((state)=>state.function.quizId);
    //step 4
    const save = (e)=>{
        e.preventDefault();
        console.log({id:Date.now(),title:title,quizzes});
    };
   
  return (
    <div className='w-36 shadow-lg p-3 border md:min-w-64 '>
    <section className='line-clamp-2 bg-purple-600 rounded-lg text-sm  p-3 font-medium  text-white'>
        <p className='line-clamp-2'>Title : {title}</p>
    </section>
    <section className='h-96 my-1 pr-2 flex flex-col items-center overflow-y-auto scrollWidth overflow-x-hidden pb-3 z-10' >
        {
            quizzes.map((item,i)=>(
                <div onClick={(e)=>findQuizId(e,item.id)} key={i} className={ item.id===quizId ? "scale-110 transition my-1 border-pink-600 border-b-4 rounded-lg" : "" }>
                {
                item.type == "qna" ? 
                <QAquiz number={i}  /> :
                (item.type == "qcm") ?
                <QCMquiz number={i}  /> :
                (item.type == "tf") ? 
                <TFquiz number={i} /> : <OPquiz number={i} />
                }
                </div>
            ))
        }
    </section>
    <section className='relative '>
        <button onClick={showQuizTypeBtn} className='bg-green-500  rounded-lg p-2 text-center w-full text-white font-medium mt-3 hover:scale-105 transition'>Add</button>
        <button onClick={save} className='bg-blue-500  rounded-lg p-2 text-center w-full text-white font-medium mt-3 hover:scale-105 transition'>Save</button>
        {
            showQuizType && 
            <div className='absolute -top-9 -right-52 bg-white p-3 shadow-lg border w-48 rounded-lg transition'>
                <div>
                    <p className='text-sm cursor-pointer font-medium '>Type</p>
                </div>
                <div onClick={(e)=>addQuiz(e,"tf")} className='bg-green-500 p-2 my-2 text-white text-center hover:scale-105 transition cursor-pointer'>
                    <p className='text-xs font-medium'>TRUE OR FALSE</p>
                </div>
                <div onClick={(e)=>addQuiz(e,"qcm")} className='bg-yellow-400 p-2 my-2 text-white text-center hover:scale-105 transition cursor-pointer' >
                    <p className='text-xs font-medium'>QCM</p>
                </div>
                {/* <div onClick={(e)=>addQuiz(e,"qna")} className='bg-red-500 p-2 my-2 text-white text-center hover:scale-105 transition cursor-pointer'>
                    <p className='text-xs font-medium'>QUESTION</p>
                </div> */}
                {/* <div onClick={(e)=>addQuiz(e,"op")} className='bg-blue-500 p-2 my-2 text-white text-center hover:scale-105 transition cursor-pointer'>
                    <p className='text-xs font-medium'>OPTION</p>
                </div> */}
            </div>
        }
    </section>
</div>
  )
}
