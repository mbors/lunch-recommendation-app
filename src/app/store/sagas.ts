import { fork, all } from 'redux-saga/effects'

const sagas = [

] as any[]

// Register all your watchers
export default function* root() {
    yield all(sagas.map(saga => fork(saga)))
}
