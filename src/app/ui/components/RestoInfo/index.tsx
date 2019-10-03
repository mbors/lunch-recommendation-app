import * as React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface RestaurantInfoProps {
    name: string,
    isChosen?: boolean
    voting: any
    description: string
}

export const RestaurantInfo = (props: RestaurantInfoProps) => {
    const { name, isChosen, voting, description } = props;

    return (
        <div className="restaurant-info-container">
            <div className="restaurant-name">
                <a href="">{name}</a>{isChosen && <FontAwesomeIcon icon="check" />}
            </div>
            <p>{description}</p>
            <p>{voting}</p>
        </div>
    )
}