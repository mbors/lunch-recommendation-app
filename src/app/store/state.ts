import { VenuesState } from "./venues/venues.state";
import { VotingState } from "./voting/voting.state";

export interface RootState {
    venuesListing: VenuesState, 
    toastr: any,
    voting: VotingState
}
