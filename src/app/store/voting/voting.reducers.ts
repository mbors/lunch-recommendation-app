
import { VotingState } from './voting.state';
import { handleActions, Action } from 'redux-actions';
import { VotingActions } from './voting.actions';
import { Voter } from './voting.model';
import { CustomizedVenue } from '../venues/venue.model';

const initialState: VotingState = {}

export const addVoterReducer = (state: VotingState, action: Action<Voter>) => ({
    ...state,
    voters: [...(state.voters || []), action.payload],
})

export const addVotingReducer = (state: VotingState, action: Action<{ voterId: string, choice: CustomizedVenue }>) => ({
    ...state,
    voters: state.voters && state.voters.map(el => el.id === action.payload.voterId ? { ...el, ['choice']: action.payload.choice } : el)
})

export const cleanVoters = (state: VotingState) => ({
    voters: [] 
})

export const votingReducer = handleActions<VotingState, any>(
    {
        [VotingActions.Type.SET_CHOICE]: addVotingReducer,
        [VotingActions.Type.SET_VOTER]: addVoterReducer,
        [VotingActions.Type.CLEAN_VOTERS]: cleanVoters
    },
    initialState
)
