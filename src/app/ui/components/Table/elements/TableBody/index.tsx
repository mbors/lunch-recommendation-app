import * as React from 'react';
import { Input } from '../../../../elements/Input';
import { CustomizedVenue } from '../../../../../store/venues/venue.model';
import nextId from "react-id-generator";
import './style.css';
import { useDispatch } from 'react-redux';
import { VotingActions } from '../../../../../store/voting/voting.actions';
// import { VenuesActions } from '../../../../../store/venues/venues.actions';

export interface TableRowProps {
    venues: CustomizedVenue[]
    votingRows: number
}

export const TableRow = (props: TableRowProps) => {
    const { venues, votingRows } = props;
    const dispatch = useDispatch()
    return (
        <tbody>
            {[...Array(votingRows)].map((el, i) => <tr key={nextId('tr-id-')} className="table-row-voter">

                <td key={nextId('td-id-')} className="td-voter">
                    <Input
                        key={nextId('input-')}
                        onChange={(e: any) => dispatch(VotingActions.setVotersName({ voterIndex: i, name: e.target.value }))}
                    />
                </td>
                {venues.map(element =>
                    <td
                    // onClick={() => dispatch(VenuesActions.getVotedVenue({ voterIndex: i, choice: element }))}
                    //     className={`td-choice ${el.choice && el.choice.id === element.id ? 'active' : ''}`} key={element.id}

                    ><div className="ticked-box"></div></td>)}
            </tr>)}
        </tbody>
    )
}