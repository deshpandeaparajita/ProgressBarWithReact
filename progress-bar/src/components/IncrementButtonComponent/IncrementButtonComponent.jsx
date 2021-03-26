import React, { useState } from 'react';
import './IncrementButtonComponent.css';
export const IncrementButtonComponent = ({buttons,handleClick}) => {

 
    return (
        <div>
            {buttons && buttons.map((value, index) => {
                return <button key={index} style={{ marginRight: "10px" }} onClick={(e)=>handleClick(e,value)}>Increment by {value}</button>;
            })}
        </div>
    );


};



export default IncrementButtonComponent;
