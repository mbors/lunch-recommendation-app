import { takeLatest, put } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import VenuesController from './venues.controller';
import { VenuesActions } from './venues.actions';

function* getVenues() {
    try {
        const venues = yield VenuesController.getInstance().fetchTrendingVenues('Berlin')
        yield put(VenuesActions.setVenues(venues))
    } catch (error) {
        toastr.error('Error', error.message)
    }
}

export default function* () {
    yield takeLatest(VenuesActions.Type.GET_VENUES, getVenues)
}


