import * as React from 'react';
import './style.css';

export interface ButtonProps {
    label: string
    onClick?: Function
}

export const Button = (props: ButtonProps) => {
    const { label, onClick } = props
    return (
        <button onClick={() => onClick && onClick()} className="button">{label}</button>
    )
}