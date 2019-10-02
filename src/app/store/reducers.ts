import { combineReducers } from 'redux'
import { RootState } from './state'
import { venuesReducer } from './venues/venues.reducers'
export { RootState }

export  const rootReducer = combineReducers<RootState>({
    venuesListing: venuesReducer
})

