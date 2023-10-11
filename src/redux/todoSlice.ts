import { createSlice } from "@reduxjs/toolkit";

interface todoType {
    id: number,
    todo: string,
    completed: false
}

interface todoSlice {
    name: string,
    initialState: Array<Object>,
    reducers: Object
}

const todoSlice = createSlice({
    name: "todos",
    initialState: [{ id: 1, todo: 'task1', completed: false }],

    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                todo: action.payload.todo,
                completed: false
            }

            state.push(newTodo)
        },
    }
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer