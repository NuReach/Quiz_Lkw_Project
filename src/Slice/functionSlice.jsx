import { createSlice } from "@reduxjs/toolkit";

export const functionSlice = createSlice({
    name : "function",
    initialState : {
        //create page state
            //click on add btn
            showQuizType : false,
            quizzes : [{id:Date.now,type:"qna",quiz:{}}],
            quizId: null,
        //playing page state
            start:false,
            page : 0,
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
                    ...state,quizzes:[...state.quizzes,action.payload.data]
                }
            },
            
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
    }
})

export const {startPlaying, nextPage,getQuizId,
             prevPage,setShowQuizType,insertQuiz} = functionSlice.actions;
export default functionSlice.reducer;