import { handleActions } from 'redux-actions'
import { AnyAction } from 'redux'
import { LoaderAction } from './loader.actions'

export type LoaderState = {
    visibility: boolean
}

const initialState = {
    visibility: false,
} as LoaderState

export const loaderReducer = handleActions<LoaderState, AnyAction>(
    {
        [LoaderAction.Type.SET_VISIBILITY]: (
            state: LoaderState,
            action: AnyAction
        ) => {
            return {
                visibility: action.payload,
            }
        },
    },
    initialState
)
