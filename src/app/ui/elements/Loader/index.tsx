import * as React from 'react';
import './style.css';

export interface LoaderProps {
    visible?: boolean
}

export const Loader = (props: LoaderProps) => {
    if (props.visible)
        return (
            <div className="loader-container">
                <div className="loader" />
            </div>
        )
    else return <noscript />
}