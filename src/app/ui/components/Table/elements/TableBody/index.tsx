import * as React from 'react';
import { Input } from '../../../../elements/Input';
import { CustomizedVenue } from '../../../../../store/venues/venue.model';

export interface TableBodyProps {
    voters: string[]
    venues: CustomizedVenue[]
}

export const TableBody = (props: TableBodyProps) => {
    const { voters, venues } = props;
    return (
        <tbody>
            {voters.map((el, i) =>
                <tr className="table-row-voter">
                    <td className="td-voter">
                        <Input />
                    </td>
                    {venues.map(el => <td className="td-choice" id={el.id}>{el.name}</td>)}
                </tr>
            )}
        </tbody>
    )
}