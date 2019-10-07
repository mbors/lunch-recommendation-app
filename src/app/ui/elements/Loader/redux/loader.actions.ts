import { Omit } from 'react-redux';
import { createAction } from 'redux-actions'

export namespace LoaderAction {
    export enum Type {
        SET_VISIBILITY = 'SET_VISIBILITY',
    }
    export const setVisbility = createAction<boolean>(Type.SET_VISIBILITY)
}

export type LoaderAction = Omit<typeof LoaderAction, 'Type'>
