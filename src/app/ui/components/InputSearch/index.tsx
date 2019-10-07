import * as React from 'react';
import { useState } from 'react';
import { Button } from '../../../ui/elements/Button';
import './style.css';
import { useDispatch } from 'react-redux';
import { VenuesActions } from '../../../store/venues/venues.actions';
import { Input } from '../../../ui/elements/Input';


export const InputSearch = () => {
    const [searchValue, setSearchValue] = useState()
    const dispatch = useDispatch()

    return (<div className="input-search-container">
        <Input
            onChange={(e: any) => setSearchValue(e.target.value)}
            onKeyDown={(e: any) => {
                e.keyCode == 13 && dispatch(VenuesActions.getVenues(searchValue))
                e.keyCode == 13 && setSearchValue('')
            }}
            value={searchValue}
            placeholder="Enter location"

        />
        <Button onClick={() => {
            dispatch(VenuesActions.getVenues(searchValue))
            setSearchValue('')
        }} label="Search" />
    </div>)
}
