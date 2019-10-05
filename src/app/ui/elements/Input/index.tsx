import * as React from 'react';
import './style.css';

export interface InputProps {
    onChange?: Function
    onKeyDown?: Function
}

export const Input = (props: InputProps) => {
    const { onChange, onKeyDown } = props;
    return (
        <input className="input-search" type="text" name="name"
            onChange={e => onChange && onChange(e)}
            onKeyDown={e => onKeyDown && onKeyDown(e)} />
    )
}