
// import { ReactNode } from 'react';
import { useSelector } from 'react-redux';

export default function TodoItems() {

    interface todoType {
        id: number,
        todo: string,
        completed: boolean
    }

    const todos:any = useSelector( (state:any) => state.todo)
  return (
    <div>
        {/* {todos.map((e:any) => {
            return(
                <>
                <p>{e.title}</p>
                </>
            )
        })} */}
        
    </div>
  )
}
