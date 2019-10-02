import { fork, all } from 'redux-saga/effects'
import venuesSagas from './venues/venues.sagas'

const sagas = [
    venuesSagas
] as any[]

// Register all your watchers
export default function* root() {
    yield all(sagas.map(saga => fork(saga)))
}
