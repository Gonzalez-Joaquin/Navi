import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserRoleDTO, StatusDTO, AlertTypeDTO, CategoryDTO, FileTypeDTO } from '../../@Types'
import FileTypeData from '../../Data/filetypes.data'
interface MetaDataState {
  userRoles: Array<UserRoleDTO>
  statuses: Array<StatusDTO>
  alertTypes: Array<AlertTypeDTO>
  categories: Array<CategoryDTO>
  fileTypes: Array<FileTypeDTO>
  loading: boolean
  error?: string
}

const initialState: MetaDataState = {
  userRoles: [
    {
      id: '0',
      label: 'Administrador',
      color: '034a73',
    },
    {
      id: '1',
      label: 'Armador',
      color: '00a1c8',
    },
    {
      id: '2',
      label: 'Propietario',
      color: '8b8fd9',
    },
    {
      id: '3',
      label: 'General',
    },
  ],
  statuses: [
    {
      id: '0',
      label: 'Pendiente',
      color: 'ff9500',
    },
    {
      id: '1',
      label: 'Aprobado',
      color: '0f0bab',
    },
    {
      id: '2',
      label: 'En revisión',
      color: '00a1c8',
    },
    {
      id: '3',
      label: 'Vencido',
      color: 'd51a52',
    },
    {
      id: '4',
      label: 'Completado',
      color: '00b998',
    },
    {
      id: '5',
      label: 'Archivado',
    },
  ],
  alertTypes: [
    {
      id: '1',
      label: 'Notificación de Actualización de Documento',
    },
    {
      id: '2',
      label: 'Alerta de Vencimiento de Certificado',
    },
    {
      id: '3',
      label: 'Alerta de Mantenimiento Programado',
    },
    {
      id: '4',
      label: 'Alerta de Nueva Carpeta de Documentos',
    },
  ],
  categories: [
    {
      id: '1',
      name: 'Certificados',
    },
    {
      id: '2',
      name: 'Registros de Mantenimiento',
    },
    {
      id: '3',
      name: 'Planos Técnicos',
    },
  ],
  fileTypes: FileTypeData,
  loading: false,
}

const metaDataSlice = createSlice({
  name: 'metaData',
  initialState,
  reducers: {
    setUserRoles: (state, action: PayloadAction<Array<UserRoleDTO>>) => {
      state.userRoles = action.payload
    },
    setStatuses: (state, action: PayloadAction<Array<StatusDTO>>) => {
      state.statuses = action.payload
    },
    setAlertTypes: (state, action: PayloadAction<Array<AlertTypeDTO>>) => {
      state.alertTypes = action.payload
    },
    setCategories: (state, action: PayloadAction<Array<CategoryDTO>>) => {
      state.categories = action.payload
    },
    setFileTypes: (state, action: PayloadAction<Array<FileTypeDTO>>) => {
      state.fileTypes = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

export const { setUserRoles, setStatuses, setAlertTypes, setCategories, setFileTypes, setLoading, setError } =
  metaDataSlice.actions

export default metaDataSlice.reducer
