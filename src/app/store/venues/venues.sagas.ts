import { takeLatest, put, select } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import VenuesController from './venues.controller';
import { VenuesActions } from './venues.actions';
import { Venue, CustomizedVenue } from './venue.model';
import { Action } from 'redux-actions';
import { Voter } from '../voting/voting.model';
import { VotingActions } from '../voting/voting.actions';
import { RootState } from '../reducers';
import { LoaderAction } from '../../ui/elements/Loader/redux/loader.actions';

function* getVenues(action: Action<string>) {
    try {
        yield put(LoaderAction.setVisbility(true))
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
                toastr.error('Error', error.errorDetail)
            }
        }
        yield put(VenuesActions.setVenues(customizedVenues))
    } catch (error) {
        toastr.error('Error', error.errorDetail)
    }
    yield put(LoaderAction.setVisbility(false))
}

function* getVotedVenue(action: Action<{ voterId: string, choice: CustomizedVenue }>) {
    if (!action.payload) {
        return
    }

    const { voterId, choice } = action.payload;
    yield put(VotingActions.setChoice({ voterId, choice }))
    const voters = yield select((state: RootState) => state.voting.voters)
    const chosenVenues = voters.map((el: Voter) => el.choice && el.choice.id)

    const winner = chosenVenues.sort((a: string, b: string) =>
        chosenVenues.filter((v: string) => v === a).length - chosenVenues.filter((v: string) => v === b).length).pop()
    yield put(VenuesActions.setWinner(winner))

}


export default function* () {
    yield takeLatest(VenuesActions.Type.GET_VENUES, getVenues)
    yield takeLatest(VenuesActions.Type.GET_VOTED_VENUE, getVotedVenue)
}


