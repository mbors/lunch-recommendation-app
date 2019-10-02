import * as React from 'react'
import './style.css';
import { VenuesActions } from '../../../store/venues/venues.actions';
import { Utils } from '../../../utils';
import { RootState } from 'app/store/state';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

export interface AppProps {
    getVenues?: Function
}
@connect((state: RootState) => ({
}),
    (dispatch: Dispatch): Pick<AppProps, 'getVenues'> => ({
        getVenues: bindActionCreators(
            Utils.omit(VenuesActions, 'Type'),
            dispatch
        ).getVenues,
    })
)

export class App extends React.Component<AppProps> {

    componentDidMount() {
        const { getVenues } = this.props;
        getVenues && getVenues()
    }

    render() {
        return (
            <div className="main-content">
            </div>
        )
    }
}
