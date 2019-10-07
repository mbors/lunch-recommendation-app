import { CustomizedVenue } from "../venues/venue.model";

export interface Voter {
    id: string
    choice?: CustomizedVenue
    name: string
}