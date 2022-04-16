import React from 'react'
import {useReducer} from 'react'



export default function Counter() {
  const initialState = {count:0}

  type IncDectype = {
    type:'increment'|'decrement',
    payload:number
  }
  type resetType={
    type:'reset'
  }
  function reducer(state:{count:number},action:{type:'increment'|'decrement'|'reset',payload?:number}){
    switch(action.type){
      case 'increment':
        return {count:state.count+(action.payload || 0)}
      case 'decrement':
        return {count:state.count-(action.payload || 0)}
      case 'reset':
        return initialState
      default:return state
    }
  }
  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
      Count : {state.count}
      <button onClick={()=>dispatch({type:'increment',payload:10})}>Increment 10</button>
      <button onClick={()=>dispatch({type:'decrement',payload:10})}>Decrement 10</button>
      <button onClick={()=>dispatch({type:'reset'})}>Decrement 10</button>
    </div>
  )
}
