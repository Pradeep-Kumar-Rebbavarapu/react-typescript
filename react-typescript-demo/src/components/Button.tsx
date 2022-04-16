import React from 'react'

type ButtonType = {
    handleClick:(e: React.MouseEvent<HTMLButtonElement>,id:number)=>void,
    styles?:React.CSSProperties
}

export default function Button(props:ButtonType) {
  return (
    <div>
      <button style={props.styles} onClick = {e=>{
          props.handleClick(e,1)
      }}>Click</button>
    </div>
  )
}
