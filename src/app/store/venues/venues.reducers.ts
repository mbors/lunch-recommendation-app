import { handleActions, Action } from 'redux-actions'
import { AnyAction } from 'redux'
import { VenuesState } from './venues.state';
import { VenuesActions } from './venues.actions';

const initialState: VenuesState = {}

export const setVenuesReducer = (state: VenuesState, action: AnyAction) => ({ ...state, venues: action.payload }) as VenuesState

export const setWinnerReducer = (state: VenuesState, action: Action<string>) => ({
    ...state,
    venues: state.venues && state.venues.map(el => el.id === action.payload ? { ...el, ['winner']: true } : { ...el, ['winner']: false })
})

export const venuesReducer = handleActions<VenuesState, any>(
    {
        [VenuesActions.Type.SET_VENUES]: setVenuesReducer,
        [VenuesActions.Type.SET_WINNER]: setWinnerReducer
    },
    initialState
)
