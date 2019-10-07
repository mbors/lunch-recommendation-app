import * as React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CustomizedVenue } from '../../../store/venues/venue.model';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export interface RestaurantInfoProps {
    venue: CustomizedVenue
}

export const RestaurantInfo = (props: RestaurantInfoProps) => {
    const { venue: { name, rating, category, url, winner } } = props;
    return (
        <div className={`restaurant-info-container ${winner ? 'winner' : ''}`}>
            <div className="restaurant-name ">
                <a className="restaurant-link" href={url}>{name}</a>
                {winner && <FontAwesomeIcon icon={faCheck} size={'lg'}/>}
            </div>
            <p className="restaurant-category">{category || '---'}</p>
            <p className="restaurant-rating">{rating || '---'}</p>
        </div>
    )
}