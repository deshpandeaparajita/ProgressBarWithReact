import React from 'react';
import PropTypes from 'prop-types';
import { PercentageComponent } from '../PercentageComponent';
import './ProgressBarComponent.css';


export const ProgressBarComponent = (props) => {

    const { percent, limit } = props;
    
    const correctPercentage = ((percent) * 100) / (limit);


    return (
        <div className="progress-bar" style={{ width: `${limit}px ` }}>
            <PercentageComponent percentRange={correctPercentage} />
        </div>
    );
};

ProgressBarComponent.defaultProps = {
    percent: 0,
    limit: 0,
};

ProgressBarComponent.propTypes = {
    percent: PropTypes.number,
    limit: PropTypes.number,
};

export default ProgressBarComponent;