import * as React from 'react';
import { CustomizedVenue } from '../../../store/venues/venue.model';
import { TableHeader } from './elements/TableHeader';
import { TableBody } from './elements/TableBody';
import './style.css';

export interface TableProps {
    voters: string[]
    venues: CustomizedVenue[]
}

export const Table = (props: TableProps) => {
    const { voters, venues } = props;
    return (
        <table className="venues-table">
            <TableHeader venues={venues} />
            <TableBody venues={venues} voters={voters} />
        </table>
    )
}


