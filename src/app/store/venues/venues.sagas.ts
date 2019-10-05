import { takeLatest, put } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import VenuesController from './venues.controller';
import { VenuesActions } from './venues.actions';
import { Venue, CustomizedVenue } from './venue.model';
import { Action } from 'redux-actions';

function* getVenues(action: Action<string>) {
    try {
        const venues: Venue[] = yield VenuesController.getInstance().fetchVenues(action.payload)
        const customizedVenues: CustomizedVenue[] = []
        for (const venue of venues) {
            try {
                const venueDetails = yield VenuesController.getInstance().fetchVenueDetails(venue.id)
                const customizedVenue = {
                    id: venue.id, 
                    name: venue.name,
                    category: venueDetails.categories && venueDetails.categories.length !== 0 ? venueDetails.categories[0].name : undefined,
                    url: venueDetails.shortUrl,
                    rating: venueDetails.rating
                } as CustomizedVenue
                customizedVenues.push(customizedVenue)
            } catch (error) {
                console.log('toastr error', error.errorDetail)
                toastr.error('Error', error.errorDetail)
            }
        }
        yield put(VenuesActions.setVenues(customizedVenues))
    } catch (error) {
        console.log('toastr error', error.errorDetail)
        console.log('error in saga ', error)
        toastr.error('Error', error.errorDetail)
    }
}

export default function* () {
    yield takeLatest(VenuesActions.Type.GET_VENUES, getVenues)
}


