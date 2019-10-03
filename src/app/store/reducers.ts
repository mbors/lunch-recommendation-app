import { combineReducers } from 'redux'
import { RootState } from './state'
import { venuesReducer } from './venues/venues.reducers'
export { RootState }
import {reducer as toastrReducer} from 'react-redux-toastr'

export  const rootReducer = combineReducers<RootState>({
    venuesListing: venuesReducer,
    toastr: toastrReducer
})

