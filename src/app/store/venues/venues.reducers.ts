import { handleActions } from 'redux-actions'
import { AnyAction } from 'redux'
import { VenuesState } from './venues.state';
import { VenuesActions } from './venues.actions';

const initialState: VenuesState = {
    venues: [] as any[]
}

export const setVenuesReducer = (state: VenuesState, action: AnyAction) => ({ venues: action.payload }) as VenuesState


export const venuesReducer = handleActions<VenuesState, any>(
    {
        [VenuesActions.Type.SET_VENUES]: setVenuesReducer,
    },
    initialState
)
