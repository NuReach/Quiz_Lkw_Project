import { createSlice } from "@reduxjs/toolkit";

export const functionSlice = createSlice({
    name : "function",
    initialState : {
        //create page state
            //click on add btn
            showQuizType : false,
            quizzes : [{id:Date.now(),type:"tf",quiz:{}}],
            quizId: null,
        //playing page state
            start:false,
            page : 0,
            userAnswers:[],
        //search
            search : "",
        //dailog
            dailog : false,
            deleteItem: {},
        //create exam
            selectedQuestion : [],
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
                const item = action.payload.data;
                const userAnswers = action.payload.userAnswers;
                const existItem = state.userAnswers.find((x)=>x.id == item.id);
                if (existItem) {
                    return {
                        ...state,userAnswers:userAnswers.map((x)=>x.id==item.id ? item : x)
                    }
                }else{
                    return {
                        ...state,userAnswers:[...state.userAnswers,item]
                    }  
                }
                
            },
        // search function
            filterItem : (state,action)=>{
                const search = action.payload.search;
                return {
                    ...state,search:search
                }
            },
        // show dailog
            showDailog : (state,action)=>{
                return {
                    ...state,dailog:!state.dailog
                }
            },
            deleteItem : (state,action)=>{
               const payload = action.payload;
               console.log(payload);
               return{
                ...state,deleteItem:payload
               }
            },
        //create exam page
            addQuestion : (state,action)=>{
                const item = action.payload.item;
                const selectedQuestion = action.payload.selectedQuestion;
                const existItem = state.selectedQuestion.find((x)=>x.id == item.id);
                if(existItem){
                    return {
                        ...state,selectedQuestion:selectedQuestion.map((x)=>x.id == item.id? item : x)
                    }
                }else{
                    return {
                        ...state,...state,selectedQuestion:[...state.selectedQuestion,item]
                    }
                }
    
                //console.log(payload);
            }

    }
})

export const {
    startPlaying, nextPage,getQuizId,
    prevPage,setShowQuizType,insertQuiz,
    deleteQuiz,updateQuiz,insertUserAnswer,
    filterItem,showDailog,deleteItem,addQuestion
            } = functionSlice.actions;
export default functionSlice.reducer;