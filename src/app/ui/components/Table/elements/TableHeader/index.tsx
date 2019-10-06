import * as React from 'react';
import { CustomizedVenue } from '../../../../../store/venues/venue.model';
import { RestaurantInfo } from '../../../../../ui/components/RestaurantInfo';
import nextId from "react-id-generator";

export interface TableHeaderProps {
    venues: CustomizedVenue[]
}

export const TableHeader = (props: TableHeaderProps) => {
    const { venues } = props;

    return (
        <thead>
            <tr className="table-row-heading">
                <th className="th-participants" />
                {venues.map(el => <th key={nextId('th-id')}className="th-restaurant">
                    <RestaurantInfo key={el.id} venue={el} /></th>)}
            </tr>
        </thead>
    )
}