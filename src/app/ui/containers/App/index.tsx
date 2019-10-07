import * as React from 'react'
import { RootState } from 'app/store/state';
import { useSelector } from 'react-redux';
import { CustomizedVenue } from '../../../store/venues/venue.model';
import { InputSearch } from '../../../ui/components/InputSearch';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import ReduxToastr from 'react-redux-toastr';
import { Table } from '../../../ui/components/Table';
import { InputAdd } from '../../../ui/components/InputAdd';
import { Voter } from '../../../store/voting/voting.model';
import './style.css';

export const App = () => {
    const venues: CustomizedVenue[] | undefined = useSelector((state: RootState) => state.venuesListing.venues)
    const voters: Voter[] | undefined = useSelector((state: RootState) => state.voting.voters) || []

    return (
        <div className="main-content">
            <h1 className="app-heading">Lunchplace</h1>
            <InputSearch />
            {venues &&
                <React.Fragment>
                    <Table voters={voters} venues={venues} />
                    <InputAdd />
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
