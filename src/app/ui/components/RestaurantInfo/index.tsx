import * as React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface RestaurantInfoProps {
    name: string,
    isChosen?: boolean
    voting?: number
    category?: string
    url: string
}

export const RestaurantInfo = (props: RestaurantInfoProps) => {
    const { name, isChosen, voting, category, url } = props;

    return (
        <div className="restaurant-info-container">
            <div className="restaurant-name">
                <a href={url}>{name}</a>{isChosen && <FontAwesomeIcon icon="check" />}
            </div>
            {<p>{category || '---'}</p>}
            <p>{voting || '---'}</p>
        </div>
    )
}