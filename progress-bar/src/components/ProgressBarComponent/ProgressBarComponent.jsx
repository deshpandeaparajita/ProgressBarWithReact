import React from 'react';
import { PercentageComponent } from '../PercentageComponent';
import './ProgressBarComponent.css';


export const ProgressBarComponent = (props) => {
    return (
        <div className="progress-bar">
            <PercentageComponent percentRange={props.percent}/>
        </div>
    );
  };

export default ProgressBarComponent;