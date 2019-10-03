import * as React from 'react'
import './style.css';
import { RootState } from 'app/store/state';
import { connect } from 'react-redux';
import { CustomizedVenue } from '../../../store/venues/venue.model';
import { RestaurantInfo } from '../../../ui/components/RestaurantInfo';
import InputSearch from '../../../ui/components/InputSearch';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import ReduxToastr from 'react-redux-toastr';
export interface AppProps {
    venues?: CustomizedVenue[]
}
@connect((state: RootState) => ({
    venues: state.venuesListing.venues
}))

export class App extends React.Component<AppProps> {
    render() {
        const { venues } = this.props
        return (
            <div className="main-content">
                <h1>Lunchplace</h1>
                <InputSearch />
                {venues && venues.map((el, i) => <RestaurantInfo key={i} name={el.name} category={el.category} voting={el.rating} url={el.url}

                />)}

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
}
