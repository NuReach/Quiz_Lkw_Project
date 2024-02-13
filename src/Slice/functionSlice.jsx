import { createSlice } from "@reduxjs/toolkit";

export const functionSlice = createSlice({
    name : "function",
    initialState : {
        //create page state
            //click on add btn
            showQuizType : false,
            quizzes : [{id:Date.now(),type:"qna",quiz:{}}],
            quizId: null,
        //playing page state
            start:false,
            page : 0,
            userAnswer:[],
    },
    reducers : {
        //create page function
            setShowQuizType : (state,action)=>{
                return {
                    ...state,showQuizType:!state.showQuizType
                }
            },
            getQuizId : (state,action)=>{
                return {
                    ...state,quizId:action.payload.quizId
                }
            },
            insertQuiz : (state,action)=>{
                return {
                    ...state,quizzes:[...state.quizzes,action.payload]
                }
            },
            deleteQuiz : (state,action)=>{
                const newQuizzes =state.quizzes.filter((item)=>item.id !== action.payload.quizId);
                return {
                    ...state,quizzes:newQuizzes
                }
            },
            updateQuiz : (state,action)=>{
                const item = action.payload.data; 
                const existQuiz = state.quizzes.filter((x)=>x.id == item.id);
                const quizzes = action.payload.quizzes;
                if (existQuiz) {
                    return {
                        ...state,quizzes:quizzes.map((x)=>x.id == item.id ? item : x )
                    }
                }                
            },
        //playing page
            startPlaying : ( state, action )=> {
                return {
                    ...state,start:!state.start
                }
            },
            nextPage : (state,action) =>{
                    state.page++;
            },
            prevPage : (state,action) =>{
                state.page--;
            },
            insertUserAnswer : (state,action)=>{
                console.log(action.payload);
            }
    }
})

export const {startPlaying, nextPage,getQuizId,
             prevPage,setShowQuizType,insertQuiz,
            deleteQuiz,updateQuiz,insertUserAnswer
            } = functionSlice.actions;
export default functionSlice.reducer;