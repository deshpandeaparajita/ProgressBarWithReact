import React from 'react';
import './PercentageComponent.css';


export const PercentageComponent = (props) => {
    return (
       
        <div className="completed" style={{width: `${props.percentRange}%`}}/>
    );
};

export default PercentageComponent;