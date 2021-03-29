import React from 'react';
import './IncrementButtonComponent.css';
export const IncrementButtonComponent = (props) => {

    const { onClick, buttons } = props;

    return (
        <div>
            {buttons && buttons.map((value, index) => {
                return <button key={index} style={{ marginRight: "10px", marginBottom: "20px" }} onClick={(e) => onClick(e, value)}>Increment by {value}</button>;
            })}
        </div>
    );
};


export default IncrementButtonComponent;
