//context creation
//provider
//consumer lengthy remove
//useContext hook

import { type } from "@testing-library/user-event/dist/type";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext=createContext();

const initialState={
    isLoading:true,
    query:'HTML',
    nbPages:0,
    page:0,
    hits:[]
}

let API='https://hn.algolia.com/api/v1/search?';




//to create a provider function
const AppProvider=({ children })=>{
    const[state,dispatch]=useReducer(reducer,initialState);

    const removePost=(post_ID)=>{
        dispatch({type:'REMOVE_POST',payload:post_ID})    
    }

    const fetchApiData=async(url)=>{
        dispatch({type:'SET_LOADING'});
        try{
            const res=await fetch(url);
            const data=await res.json();
            console.log(data);
            dispatch({
                type:'GET_STORIES',
                payload:{
                    hits:data.hits,
                    nbPages:data.nbPages,
                }
            })
        }catch(error){
            console.log(error);
        }
    }

    //search
    const searchPost=(searchQuery)=>{
        dispatch({type:'SEARCH_QUERY',payload:searchQuery})
    }


    //pagination
    const getNextPage=()=>{
        dispatch({
            type:'NEXT_PAGE'
        })
    }

    const getPrevPage=()=>{
        dispatch({
            type:'PREVIOUS_PAGE'
        })
    }

    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query,state.page]);

    return (
        <AppContext.Provider value={{...state,removePost,searchPost,getNextPage,getPrevPage}}>
        {children}
        </AppContext.Provider>
    )
};


//Create custom hook
const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppProvider,AppContext,useGlobalContext};