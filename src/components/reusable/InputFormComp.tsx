import React from 'react'


interface IInputFormComp {
    type: 'text' | 'email' | 'password'
    placeholder: string

}
function InputFormComp({ type, placeholder }: IInputFormComp) {
    return (
        <div>

            <input type={type} name="" placeholder={placeholder} id="" className='w-full  bg-[#2c2a2add] rounded-md px-3 py-3' />

        </div>
    )
}

export default InputFormComp
