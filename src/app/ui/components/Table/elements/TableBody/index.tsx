import * as React from 'react';
import { Input } from '../../../../elements/Input';
import { CustomizedVenue } from '../../../../../store/venues/venue.model';
import nextId from "react-id-generator";
import './style.css';
import { Voter } from '../../../../../store/voting/voting.model';
import { useDispatch, useSelector } from 'react-redux';
import { VenuesActions } from '../../../../../store/venues/venues.actions';
import { VotingActions } from '../../../../../store/voting/voting.actions';
import { RootState } from '../../../../../store/state';

export interface TableBodyProps {
    voters: Voter[]
    venues: CustomizedVenue[]
}

export const TableBody = (props: TableBodyProps) => {
    const { voters, venues } = props;
    const dispatch = useDispatch()
    const rowsCount: number = useSelector((state: RootState) => state.voting.rowsCount)

    return (
        <tbody>
            <tr key={nextId('tr-id-')} className="table-row-voter">
                {...Array(rowsCount).map(el => <td key={nextId('td-id-')} className="td-voter">
                    <Input
                        key={nextId('input-')}
                        onChange={(e: any) => dispatch(VotingActions.setVotersName({ voterId: '', name: e.target.value }))}
                    />
                </td>)}
                {voters.map(el => venues.map(element =>
                    <td onClick={() => dispatch(VenuesActions.getVotedVenue({ voterId: el.id, choice: element, voters }))}
                        className={`td-choice ${el.choice && el.choice.id === element.id ? 'active' : ''}`} key={element.id}>
                        <div className="ticked-box"></div>
                    </td>))}
            </tr>
        </tbody>
    )
}