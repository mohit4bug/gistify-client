import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
        },
        removeUser: (state) => {
            state.user = {}
        }
    }
})

export default userSlice.reducer
export const { addUser, removeUser } = userSlice.actions