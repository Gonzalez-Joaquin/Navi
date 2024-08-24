import { combineReducers, configureStore } from '@reduxjs/toolkit'

import expedienteReducer from './Reducers/Expediente.reducer'
import documentReducer from './Reducers/Document.reducer'
import MetaDataReducer from './Reducers/MetaData.reducer'
import alertReducer from './Reducers/Alert.reducer'
import userReducer from './Reducers/User.reducer'

const rootReducer = combineReducers({
  users: userReducer,
  expedientes: expedienteReducer,
  documents: documentReducer,
  alerts: alertReducer,
  metaData: MetaDataReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
