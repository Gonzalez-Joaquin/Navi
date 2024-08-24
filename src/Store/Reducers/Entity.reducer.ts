import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EntityDTO } from '../../@Types'
import entitiesData from '../../Data/entites.json'

interface EntityState {
  entities: Array<EntityDTO>
}

const initialState: EntityState = {
  entities: entitiesData,
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
        if (!group.expedientIds) {
          group.expedientIds = []
        }

        if (!group.expedientIds.includes(action.payload.expedientId)) {
          group.expedientIds.push(action.payload.expedientId)
        }
      }
    },
  },
})

export const { addGroup, assignExpedientToGroup } = entitySlice.actions
export default entitySlice.reducer
