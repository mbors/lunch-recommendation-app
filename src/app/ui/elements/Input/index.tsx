import * as React from 'react';
import './style.css';

export interface InputProps {
    onChange?: Function
    onKeyDown?: Function
    value?: string
}

export const Input = (props: InputProps) => {
    const { onChange, onKeyDown, value } = props;
    return (
        <input className="input-search" type="text" name="name"
            onChange={e => onChange && onChange(e)}
            onKeyDown={e => onKeyDown && onKeyDown(e)}
            value={value}
        />
    )
}