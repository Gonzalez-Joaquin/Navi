import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import userData from '../../Data/users.json'
import { UserDTO } from '../../@Types'
interface UserState {
  list: Array<UserDTO>
  logedUser?: UserDTO
  loading: boolean
  error?: string
}

const initialState: UserState = {
  list: userData,
  loading: false,
  error: undefined,
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<Array<UserDTO>>) => {
      state.list = action.payload
    },
    setSelectedUser: (state, action: PayloadAction<string>) => {
      state.logedUser = state.list.find(user => user.id === action.payload)
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

export const { setUsers, setSelectedUser, setLoading, setError } = userSlice.actions
export default userSlice.reducer
