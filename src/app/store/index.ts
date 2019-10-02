import { Store, createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { logger } from '../middleware'
import { RootState, rootReducer } from './reducers'
import createSagaMiddleware from 'redux-saga'
import root from './sagas'

export function configureStore(initialState?: RootState): Store<RootState> {
    const sagaMiddleware = createSagaMiddleware()

    let middleware = compose(
        applyMiddleware(logger),
        applyMiddleware(sagaMiddleware)
    )

    if (process.env.NODE_ENV !== 'production') {
        middleware = composeWithDevTools(middleware)
    }

    const store = createStore(
        rootReducer as any,
        initialState as any,
        middleware
    ) as Store<RootState>

    sagaMiddleware.run(root)

    return store
}
