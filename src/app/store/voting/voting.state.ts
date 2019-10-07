import { Voter } from "./voting.model";

export interface VotingState {
    voters?: Voter[]
    votingRows: number
    inputValue?: string
}