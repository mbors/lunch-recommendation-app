import * as React from 'react';
import { CustomizedVenue } from '../../../../../store/venues/venue.model';
import { RestaurantInfo } from '../../../../../ui/components/RestaurantInfo';

export interface TableHeaderProps {
    venues: CustomizedVenue[]
}

export const TableHeader = (props: TableHeaderProps) => {
    const { venues } = props;

    return (
        <thead>
            <tr className="table-row-heading">
                <th className="th-participants" />
                {venues.map((el, i) => <th className="th-restaurant">
                    <RestaurantInfo key={i} venue={el} /></th>)}
            </tr>
        </thead>
    )
}