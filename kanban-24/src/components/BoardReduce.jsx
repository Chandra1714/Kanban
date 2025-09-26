import React from 'react'

export const initialBoard ={
    column:{
        todo: {id: 'todo',title: "To Do", tasks:[]},
        progress: {id: 'progress',title: "Progress", tasks:[]},
        done: {id: 'done',title: "Done", tasks:[]}
    }
};

 export function BoardReduce(state,action) {
 switch(action.type){
     case "ADD_TASK":{
        const newTask={
                id:Date.now().toString(),
                text:action.payload.text
            };
                return{
                    ...state,
                    column:{
                     ...state.column,
                     todo:{
                        ...state.column.todo,
                 tasks: [...state.column.todo.tasks,action.payload.text]
                }
            }
            }
            };
        case "Move-Task":
        const {sourcecol,targetCol,task}=action.payload;
        return{
            ...state,
            column:{
                ...state.column,
                [sourcecol]:{
                    ...state.column[sourcecol],
                    tasks:state.column[sourcecol].tasks.filter((t)=> t!== task)
                },
                 [targetCol]:{
                    ...state.column[targetCol],
                    tasks:[...state.column[targetCol].tasks,task]
                },
            }
        }
        case "Delete-Task":{
            return{
            ...state,
            column:{
                ...state.column,
                [action.payload.sourcecol]: {
                    ...state.column[action.payload.sourcecol],
                    tasks:state.column[action.payload.sourcecol].
                    tasks.filter((t)=> t !== action.payload.task)
                }
    }

        }}
        default:
            return state;
           

}
 }


