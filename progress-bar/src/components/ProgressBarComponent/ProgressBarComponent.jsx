import React from 'react';
import { PercentageComponent } from '../PercentageComponent';
import './ProgressBarComponent.css';


export const ProgressBarComponent = (props) => {

    const correctPercentage = ((props.percent) * 100) / (props.limit);


    return (
        <div className="progress-bar" style={{ width: `${props.limit}px` }}>
            <PercentageComponent percentRange={correctPercentage}  />
        </div>
    );
};

export default ProgressBarComponent;