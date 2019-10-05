import * as React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import { VotingActions } from '../../../store/voting/voting.actions';
import { RootState } from '../../../store/state';
import { CustomizedVenue } from '../../../store/venues/venue.model';

export interface RestaurantInfoProps {
    venue: CustomizedVenue
}

export const RestaurantInfo = (props: RestaurantInfoProps) => {
    const { venue, venue: { name, rating, category, url, id } } = props;
    const dispatch = useDispatch()
    const choice = useSelector((state: RootState) => state.voting.choice)
    const defineClass = () => choice && choice.id === id ? 'active' : ''
    
    return (
        <div onClick={() => dispatch(VotingActions.setChoice(venue))} className={`restaurant-info-container ${defineClass()}`}>
            <div className="restaurant-name">
                <a href={url}>{name}</a> <FontAwesomeIcon icon="check" />
            </div>
            {<p>{category || '---'}</p>}
            <p>{rating || '---'}</p>
        </div>
    )
}