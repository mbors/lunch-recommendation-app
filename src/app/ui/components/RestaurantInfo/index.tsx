import * as React from 'react';
import './style.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CustomizedVenue } from '../../../store/venues/venue.model';

export interface RestaurantInfoProps {
    venue: CustomizedVenue
}

export const RestaurantInfo = (props: RestaurantInfoProps) => {
    const { venue: { name, rating, category, url } } = props;
    return (
        <div className='restaurant-info-container'>
            <div className="restaurant-name">
                <a href={url}>{name}</a>
                {/* <FontAwesomeIcon icon="check" /> */}
            </div>
            {<p>{category || '---'}</p>}
            <p>{rating || '---'}</p>
        </div>
    )
}