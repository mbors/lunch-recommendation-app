
import { VotingState } from './voting.state';
import { AnyAction } from 'redux';
import { handleActions } from 'redux-actions';
import { VotingActions } from './voting.actions';

const initialState: VotingState = {}


export const addVoterReducer = (state: VotingState, action: AnyAction) => ({
    ...state,
    voters: [...(state.voters || []), action.payload]
}) as VotingState

export const addVotingReducer = (state: VotingState, action: AnyAction) => ({
    ...state,
    choice: action.payload
}) as VotingState

export const votingReducer = handleActions<VotingState, any>(
    {
        [VotingActions.Type.SET_CHOICE]: addVotingReducer,
        [VotingActions.Type.SET_VOTER]: addVoterReducer
    },
    initialState
)
