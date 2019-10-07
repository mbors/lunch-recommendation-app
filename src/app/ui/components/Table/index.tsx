import * as React from 'react';
import { CustomizedVenue } from '../../../store/venues/venue.model';
import { TableHeader } from './elements/TableHeader';
import { TableRow } from './elements/TableBody';
import './style.css';

export interface TableProps {
    venues: CustomizedVenue[]
    votingRows: number
}

export const Table = (props: TableProps) => {
    const { venues, votingRows } = props;
    return (
        <table className="venues-table">
            <TableHeader venues={venues} />
            <TableRow venues={venues} votingRows={votingRows}/>
        </table>
    )
}


