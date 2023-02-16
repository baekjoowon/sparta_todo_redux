import { configureStore, createSlice } from '@reduxjs/toolkit'




let list = createSlice({
    name:'list',
    initialState : [
        
        
    ],
    reducers: {
        addList(state,action){
            state.push(action.payload) 
            console.log(action.payload)
        },
        deleteList(state,action){
            let deleteIndex = state.findIndex((x)=> x.id == action.payload)
            console.log(action.payload)
            console.log(deleteIndex)
            console.log(list.state)
            state.splice(deleteIndex,1)
            
            
        },
        isDone(state,action){
            let isDoneIndex = state.findIndex((x)=> x.id == action.payload)
            state[isDoneIndex].work == true ? state[isDoneIndex].work = false : state[isDoneIndex].work = true
           
        }

    }
})

export let {addList, deleteList, isDone} = list.actions


export default configureStore({
    reducer:{
        list: list.reducer,

    }
})
