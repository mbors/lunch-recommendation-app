import * as React from 'react';
import { CustomizedVenue } from '../../../../../store/venues/venue.model';
import nextId from "react-id-generator";
import './style.css';
import { Voter } from '../../../../../store/voting/voting.model';
import { useDispatch } from 'react-redux';
import { VenuesActions } from '../../../../../store/venues/venues.actions';

export interface TableBodyProps {
    venues: CustomizedVenue[]
    voters: Voter[]
}

export const TableBody = (props: TableBodyProps) => {
    const { venues, voters } = props;
    const dispatch = useDispatch()
    return (
        <tbody>
            {voters.map((el, i) =>
                <tr key={nextId('tr-id-')} className="table-row-voter">
                    <td key={nextId('td-id-')} className="td-voter">
                        <span>{el.name}</span>
                    </td>
                    {venues.map(element =>
                        <td
                            onClick={() => dispatch(VenuesActions.getVotedVenue({ voterId: el.id, choice: element }))}
                            className={`td-choice ${el.choice && el.choice.id === element.id ? 'active' : ''}`} key={element.id}><div className="ticked-box"></div></td>)}
                </tr>)}
        </tbody>
    )
}