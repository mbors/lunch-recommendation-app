
import { VotingState } from './voting.state';
import { handleActions, Action } from 'redux-actions';
import { VotingActions } from './voting.actions';
import { Voter } from './voting.model';
import { CustomizedVenue } from '../venues/venue.model';

const initialState: VotingState = {
    votingRows: 0
}

export const addVoterReducer = (state: VotingState, action: Action<Voter>) => ({
    ...state,
    voters: [...(state.voters || []), action.payload],
    votingRows: state.votingRows + 1
})

export const addVotingReducer = (state: VotingState, action: Action<{ voterId: string, choice: CustomizedVenue }>) => ({
    ...state,
    voters: state.voters && state.voters.map(el => el.id === action.payload.voterId ? { ...el, ['choice']: action.payload.choice } : el)
})

export const setVotersName = (state: VotingState, action: Action<{ voterIndex: number, name: string }>) => 
({
    ...state,
    voters: state.voters && state.voters.map((el, id) => id === action.payload.voterIndex ? { ...el, ['name']: action.payload.name } : el)
})

export const setInputValue = (state: VotingState, action: Action<string>) => ({
    ...state, 
    inputValue: action.payload
})

export const votingReducer = handleActions<VotingState, any>(
    {
        [VotingActions.Type.SET_CHOICE]: addVotingReducer,
        [VotingActions.Type.SET_VOTER]: addVoterReducer,
        [VotingActions.Type.SET_VOTERS_NAME]: setVotersName, 
        [VotingActions.Type.SET_INPUT]: setInputValue
    },
    initialState
)
