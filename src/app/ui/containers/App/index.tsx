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

export const App = () => {
    const venues: CustomizedVenue[] = useSelector((state: RootState) => state.venuesListing.venues) || []
    const voters: string[] = useSelector((state: RootState) => state.voting.voters) || []

    const dispatch = useDispatch()

    return (
        <div className="main-content">
            <h1>Lunchplace</h1>
            <InputSearch />
            <Table voters={voters} venues={venues} />
            <Button onClick={() => dispatch(VotingActions.setVoter(''))} label="Add participant" />
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
