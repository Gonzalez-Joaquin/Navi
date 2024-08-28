import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ExpedienteDTO } from '../../@Types'
import records from '../../Data/records.json'

interface ExpedienteState {
  list: Array<ExpedienteDTO>
  loading: boolean
  error?: string
}

const initialState: ExpedienteState = {
  list: records,
  loading: false,
}

const expedienteSlice = createSlice({
  name: 'expedientes',
  initialState,
  reducers: {
    setExpedientes: (state, action: PayloadAction<Array<ExpedienteDTO>>) => {
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

export const { setExpedientes, setLoading, setError } = expedienteSlice.actions
export default expedienteSlice.reducer
