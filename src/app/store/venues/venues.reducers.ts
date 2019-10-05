import { handleActions } from 'redux-actions'
import { AnyAction } from 'redux'
import { VenuesState } from './venues.state';
import { VenuesActions } from './venues.actions';
import { CustomizedVenue } from './venue.model';

const initialState: VenuesState = {
    venues: [] as CustomizedVenue[],
}

export const setVenuesReducer = (state: VenuesState, action: AnyAction) => ({ venues: action.payload }) as VenuesState

export const addVoterReducer = (state: VenuesState, action: AnyAction) => (
    {
        ...state,
        voter: action.payload
    }
) as VenuesState

export const addVoteReducer = (state: VenuesState, action: AnyAction) => ({
    ...state,
    choice: action.payload
}) as VenuesState

export const venuesReducer = handleActions<VenuesState, any>(
    {
        [VenuesActions.Type.SET_VENUES]: setVenuesReducer,
    },
    initialState
)
