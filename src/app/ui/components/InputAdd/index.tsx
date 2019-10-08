import * as React from 'react';
import { useState } from 'react';
import { Button } from '../../../ui/elements/Button';
import './style.css';
import { useDispatch } from 'react-redux';
import { Input } from '../../../ui/elements/Input';
import nextId from 'react-id-generator';
import { VotingActions } from '../../../store/voting/voting.actions';

export const InputAdd = () => {
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch()

    return (<div className="input-search-container">
        <Input
            onChange={(e: any) => setSearchValue(e.target.value)}
            onKeyDown={(e: any) => {
                e.keyCode == 13 && dispatch(VotingActions.setVoter({ id: nextId('voted-id-'), name: searchValue }))
                e.keyCode == 13 && setSearchValue('')
            }}
            value={searchValue}
            placeholder="Enter name"
        />
        <Button onClick={() => {
            dispatch(VotingActions.setVoter({ id: nextId('voted-id-'), name: searchValue }))
            setSearchValue('')}} label="Add participant" />
    </div>)
}
