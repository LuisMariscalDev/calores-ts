import { Activity } from "../types"

export type ActivityActions =
    { type: 'save-avtivity', payload: {newActivity: Activity}}

type ActivityState = {
    activities : Activity[];
}

export const initialState : ActivityState = {
    activities : []
}

export const activityReducer = (
        state : ActivityState = initialState,
        action : ActivityActions
    ) => {

    if(action.type === 'save-avtivity') {
        // Este código maneja la lógica para actualizar el state
        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
    }

    return state;
}