import { VenuesState } from "./venues/venues.state";
import { VotingState } from "./voting/voting.state";
import { ComponentsStates } from "./components/components.state";

export interface RootState {
    venuesListing: VenuesState, 
    toastr: any,
    voting: VotingState,
    ui: ComponentsStates
}
