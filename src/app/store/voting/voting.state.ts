import { CustomizedVenue } from "../venues/venue.model";

export interface VotingState {
    voters?: string[],
    choice?: CustomizedVenue
}