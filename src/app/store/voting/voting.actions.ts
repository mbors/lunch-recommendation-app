import { createAction } from 'redux-actions'
import { Omit } from 'react-redux';

export namespace VotingActions {
    export enum Type {
        SET_VOTER = 'SET_VOTER',
        SET_CHOICE = 'SET_CHOICE',
        SET_VOTERS_NAME = 'SET_VOTERS_NAME'
    }

    export const setVoter = createAction(Type.SET_VOTER)
    export const setChoice = createAction(Type.SET_CHOICE)
    export const setVotersName = createAction(Type.SET_VOTERS_NAME)
}

export type VotingActions = Omit<typeof VotingActions, 'Type'>
