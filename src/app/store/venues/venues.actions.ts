import { createAction } from 'redux-actions'
import { Omit } from 'react-redux';

export namespace VenuesActions {
    export enum Type {
        GET_VENUES = 'GET_VENUES',
        SET_VENUES = 'SET_VENUES',
        GET_VOTED_VENUE = 'GET_VOTED_VENUE',
        SET_WINNER = 'SET_WINNER'
    }

    export const getVenues = createAction(Type.GET_VENUES)
    export const setVenues = createAction(Type.SET_VENUES)
    export const getVotedVenue = createAction(Type.GET_VOTED_VENUE)
    export const setWinner = createAction(Type.SET_WINNER)
}

export type VenuesActions = Omit<typeof VenuesActions, 'Type'>
