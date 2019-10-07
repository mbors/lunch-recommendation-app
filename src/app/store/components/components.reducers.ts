import { combineReducers } from 'redux'
import { ComponentsStates } from './components.state'
import { loaderReducer } from '../../ui/elements/Loader/redux/loader.reducer';

export const uiReducers = combineReducers<ComponentsStates>({loader: loaderReducer});
