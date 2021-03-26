import React from 'react';

export const IncrementButtonComponent = (buttonsObj) => {

    const { buttons } = buttonsObj;

    return (
        <div>
            {buttons && buttons.map((value, index) => {
                return <button key={index} style={{ marginRight: "10px" }}>Increment by {value}</button>;
            })}
        </div>
    );


};

export default IncrementButtonComponent;