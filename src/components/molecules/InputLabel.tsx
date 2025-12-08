import React from 'react'
import Input from '../atoms/Input'
import Label from '../atoms/Label'

type InputLabelProps={
    label:string,
    placeholder:string
}
const InputLabel = ({label,placeholder}:InputLabelProps) => {
  return (
    <div className='flex flex-col gap-2'>
        <Label>{label}</Label>
        <Input placeholder={placeholder} type="text" ></Input>
    </div>
  )
}

export default InputLabel