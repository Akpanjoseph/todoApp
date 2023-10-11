import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './redux/todoSlice';



export default function Todo() {

    const [text, setText] = useState('')
    const dispatch = useDispatch()
    

    function handleSubmit(e: any) {
        e.preventDefault()
        try {

            dispatch(addTodo({ todo: text }))
            console.log(text);
            setText('')

        } catch (error) {
            console.log(error);
        }

    }


    return (

        <form className='w-[70%] flex justify-center' onSubmit={handleSubmit}>
            <input type="text" placeholder='add todos ...' className='border-2 p-2 w-1/2' value={text} onChange={e => setText(e.target.value)} /> <button className='bg-black text-white px-8 mx-2 py-2' >add</button>
        </form>
    )
}
