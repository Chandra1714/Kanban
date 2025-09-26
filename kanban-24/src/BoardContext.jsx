import React, { createContext, useReducer } from "react";
import { useContext } from "react";
import { BoardReduce, initialBoard } from "./components/BoardReduce";

 export const BoardContext = createContext();

export function useBoard(){
    return useContext(BoardContext);
}


export function BoardProvider({children}){
 const [state,dispatch]=useReducer(BoardReduce,initialBoard)  
 return(
    <BoardContext.Provider value={{state,dispatch}}>
        {children}
    </BoardContext.Provider>
 ) 
}