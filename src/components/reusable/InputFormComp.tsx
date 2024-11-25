import React from 'react'


interface IInputFormComp {
    type: 'text' | 'email' | 'password'
    placeholder: string
    value: string
    setvalue: React.Dispatch<React.SetStateAction<string>>

}
function InputFormComp({ type, placeholder, value, setvalue }: IInputFormComp) {
    return (
        <div>

            <input type={type} name="" placeholder={placeholder} value={value} onChange={(e) => { setvalue(e.target.value) }} id="" className='w-full  bg-[#2c2a2add] rounded-md px-3 py-3' />

        </div>
    )
}

export default InputFormComp
