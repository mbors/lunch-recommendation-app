import { CustomizedVenue } from "../venues/venue.model";

export interface Voter {
    name: string, 
    id: string
    choice?: CustomizedVenue
}