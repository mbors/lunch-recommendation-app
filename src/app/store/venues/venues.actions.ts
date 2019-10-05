import { createAction } from 'redux-actions'
import { Omit } from 'react-redux';

export namespace VenuesActions {
    export enum Type {
        GET_VENUES = 'GET_VENUES',
        SET_VENUES = 'SET_VENUES', 

    }
    export const getVenues = createAction(Type.GET_VENUES)
    export const setVenues = createAction(Type.SET_VENUES)
}

export type VenuesActions = Omit<typeof VenuesActions, 'Type'>
