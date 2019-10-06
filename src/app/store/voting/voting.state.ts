import { Voter } from "./voting.model";

export interface VotingState {
    voters?: Voter[],
    rowsCount: number
}