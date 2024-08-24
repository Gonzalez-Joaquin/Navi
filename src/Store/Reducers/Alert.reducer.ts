import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AlertDTO } from '../../@Types'

interface AlertState {
  list: Array<AlertDTO>
  loading: boolean
  error?: string
}

const initialState: AlertState = {
  list: [],
  loading: false,
}

const alertSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    setAlerts: (state, action: PayloadAction<Array<AlertDTO>>) => {
      state.list = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

export const { setAlerts, setLoading, setError } = alertSlice.actions
export default alertSlice.reducer
