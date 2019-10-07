import * as React from 'react'
import { RootState } from 'app/store/state';
import { useSelector, useDispatch } from 'react-redux';
import { CustomizedVenue } from '../../../store/venues/venue.model';
import { InputSearch } from '../../../ui/components/InputSearch';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import ReduxToastr from 'react-redux-toastr';
import { Button } from '../../../ui/elements/Button';
import { VotingActions } from '../../../store/voting/voting.actions';
import { Table } from '../../../ui/components/Table';
import nextId from "react-id-generator";

export const App = () => {
    const venues: CustomizedVenue[] | undefined = useSelector((state: RootState) => state.venuesListing.venues)
    const votingRows: number = useSelector((state: RootState) => state.voting.votingRows)

    const dispatch = useDispatch()

    return (
        <div className="main-content">
            <h1>Lunchplace</h1>
            <InputSearch />
            {venues &&
                <React.Fragment>
                    <Table venues={venues} votingRows={votingRows} />
                    <Button onClick={() => dispatch(VotingActions.setVoter({ id: nextId('voted-id-'), name: '' }))} label="Add participant" />
                </React.Fragment>
            }
            <ReduxToastr
                timeOut={4000}
                newestOnTop={false}
                preventDuplicates
                position="top-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick />
        </div>
    )
}
