
import './App.css'
import Todo from './Todo'
import TodoItems from './TodoItems'

function App() {
  return (
    <div className='flex justify-center flex-col items-center w-full gap-10 mt-10'>
      <p className="font-bold text-red-500">Todo App</p>

      <Todo/>
      <TodoItems/>
    </div>
  )
}

export default App
