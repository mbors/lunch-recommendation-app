import * as React from 'react';
import { CustomizedVenue } from '../../../store/venues/venue.model';
import { TableHeader } from './elements/TableHeader';
import { TableBody } from './elements/TableBody';
import './style.css';
import { Voter } from '~app/store/voting/voting.model';

export interface TableProps {
    venues: CustomizedVenue[]
    voters: Voter[]
}

export const Table = (props: TableProps) => {
    const { venues, voters } = props;
    return (
        <table className="venues-table">
            <TableHeader venues={venues} />
            <TableBody voters={voters} venues={venues}/>
        </table>
    )
}


