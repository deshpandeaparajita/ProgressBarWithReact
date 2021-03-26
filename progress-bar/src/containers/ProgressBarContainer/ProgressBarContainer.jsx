import React, { useEffect, useState } from 'react';
import IncrementButtonComponent from '../../components/IncrementButtonComponent/IncrementButtonComponent';
import { ProgressBarComponent } from '../../components/ProgressBarComponent';


export const ProgressBarContainer = (props) => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("http://pb-api.herokuapp.com/bars").then(res => {
            if (res.ok) {
                res.json().then(resObj => {
                    setData(resObj);
                });
            } else console.log("unable to fetch");
        });

    }, []);

    const { buttons, bars, limit } = data;

    return (<React.Fragment>
        <ProgressBarComponent />
        <IncrementButtonComponent buttons={buttons} />
    </React.Fragment>
    );
}

export default ProgressBarContainer;