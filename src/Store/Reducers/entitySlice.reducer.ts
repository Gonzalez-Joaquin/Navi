import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EntityDTO } from '../../@Types'

interface EntityState {
  entities: Array<EntityDTO>
}

const initialState: EntityState = {
  entities: [
    {
      id: '1001',
      name: 'Grupo de Propietarios',
      timestamp: new Date().toISOString(),
      members: ['1', '2', '14', '18', '22'],
    },
    {
      id: '1002',
      name: 'Grupo de Armadores',
      timestamp: new Date().toISOString(),
      members: ['3', '7', '11', '15', '19', '23'],
    },
    {
      id: '1003',
      name: 'Empresa Naval A',
      timestamp: new Date().toISOString(),
      members: ['1', '5', '9', '21'],
    },
    {
      id: '1004',
      name: 'Embarcación El Viajero',
      timestamp: new Date().toISOString(),
      members: ['3', '11', '15'],
    },
    {
      id: '1005',
      name: 'Equipo de Mantenimiento - Embarcación Aurora',
      timestamp: new Date().toISOString(),
      members: ['5', '13', '17', '25'],
    },
    {
      id: '1006',
      name: 'Empresa Naval B',
      timestamp: new Date().toISOString(),
      members: ['4', '8', '16', '20', '24'],
    },
    {
      id: '1007',
      name: 'Grupo de Propietarios de Embarcaciones Privadas',
      timestamp: new Date().toISOString(),
      members: ['2', '14', '18'],
    },
    {
      id: '1008',
      name: 'Grupo de Armadores - Embarcación La Estrella',
      timestamp: new Date().toISOString(),
      members: ['7', '19', '23'],
    },
    {
      id: '1009',
      name: 'Empresa de Planos y Documentos Navales C',
      timestamp: new Date().toISOString(),
      members: ['1', '3', '9', '13', '25'],
    },
    {
      id: '1010',
      name: 'Grupo de Mantenimiento de Embarcaciones Comerciales',
      timestamp: new Date().toISOString(),
      members: ['5', '13', '17'],
    },
  ],
}

const entitySlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    addGroup: (state, action: PayloadAction<EntityDTO>) => {
      state.entities.push(action.payload)
    },
    assignExpedientToGroup: (state, action: PayloadAction<{ id: string; expedientId: string }>) => {
      const group = state.entities.find(entity => entity.id === action.payload.id)
      if (group) {
        // lógica para asignar expedientes a los miembros del grupo
      }
    },
  },
})

export const { addGroup, assignExpedientToGroup } = entitySlice.actions
export default entitySlice.reducer
