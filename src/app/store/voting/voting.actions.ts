import { createAction } from 'redux-actions'
import { Omit } from 'react-redux';

export namespace VotingActions {
    export enum Type {
        SET_VOTER = 'SET_VOTER',
        SET_CHOICE = 'SET_CHOICE',
    }

    export const setVoter = createAction(Type.SET_VOTER)
    export const setChoice = createAction(Type.SET_CHOICE)
}

export type VotingActions = Omit<typeof VotingActions, 'Type'>
