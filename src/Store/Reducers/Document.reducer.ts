import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import DocumentData from '../../Data/documents.json'
import { DocumentDTO } from '../../@Types'

interface DocumentState {
  list: Array<DocumentDTO>
  loading: boolean
  error?: string
}

const initialState: DocumentState = {
  list: DocumentData,
  loading: false,
}

const documentSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {
    setDocuments: (state, action: PayloadAction<Array<DocumentDTO>>) => {
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

export const { setDocuments, setLoading, setError } = documentSlice.actions
export default documentSlice.reducer
