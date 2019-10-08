import * as React from 'react';
import './style.css';

export interface InputProps {
    onChange?: Function
    onKeyDown?: Function
    value?: string
    placeholder?: string
}

export const Input = (props: InputProps) => {
    const { onChange, onKeyDown, value, placeholder } = props;
    return (
        <input className="input-search" type="text" name="name" required
            onChange={e => onChange && onChange(e)}
            onKeyDown={e => onKeyDown && onKeyDown(e)}
            value={value}
            placeholder={placeholder}
        />
    )
}