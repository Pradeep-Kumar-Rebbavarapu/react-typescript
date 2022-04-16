import React from 'react'

type InputType = {
    value:string,
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

export default function Input(props:InputType) {
  return (
    <div>
      <input  type="text" value={props.value}  onChange={props.handleChange} />
    </div>
  )
}
