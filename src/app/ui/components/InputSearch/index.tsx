import * as React from 'react';
import { Button } from '../../../ui/elements/Button';
import './style.css';
import { connect } from 'react-redux';
import { RootState } from '../../../store/state';
import { Dispatch, bindActionCreators } from 'redux';
import { VenuesActions } from '../../../store/venues/venues.actions';
import { Utils } from '../../../utils';

export interface InputSearchProps {
    getVenues?: Function
}

@connect((state: RootState) => ({}),
    (dispatch: Dispatch): Pick<InputSearchProps, 'getVenues'> => ({
        getVenues: bindActionCreators(
            Utils.omit(VenuesActions, 'Type'),
            dispatch
        ).getVenues,
    })
)

export default class InputSearch extends React.Component<InputSearchProps> {
    state = {
        searchValue: ''
    }


    render() {
        const { getVenues } = this.props;
        return (
            <div className="input-search-container">
                <input className="input-search" type="text" name="name"
                    onChange={e => this.setState({ searchValue: e.target.value })}
                    onKeyDown={e => e.keyCode == 13 && getVenues && getVenues(this.state.searchValue)} />
                <Button onClick={() => getVenues && getVenues(this.state.searchValue)} label="Search" />
            </div>

        )
    }
}