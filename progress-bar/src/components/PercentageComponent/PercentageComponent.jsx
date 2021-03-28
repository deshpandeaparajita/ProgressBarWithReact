import React from 'react';
import './PercentageComponent.css';


export const PercentageComponent = (props) => {
    
    return (
        props.percentRange === 100 ? (
            <div className="completed" style={{ width: `${props.percentRange}%`, background: 'red' }} />
        ) : (
            <div className="completed" style={{ width: `${props.percentRange}%`, background: 'limegreen' }} />
        )


    );
};

export default PercentageComponent;