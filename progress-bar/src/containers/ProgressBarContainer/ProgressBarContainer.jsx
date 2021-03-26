import React, { useEffect, useState } from 'react';
import IncrementButtonComponent from '../../components/IncrementButtonComponent/IncrementButtonComponent';
import { ProgressBarComponent } from '../../components/ProgressBarComponent';
import './ProgressBarContainer.css';
import { Container, Row, Col } from 'react-bootstrap';

export const ProgressBarContainer = (props) => {
    const [data, setData] = useState({});
    const [range, setRange] = useState([]);

    useEffect(() => {
        fetch("http://pb-api.herokuapp.com/bars").then(res => {
            if (res.ok) {
                res.json().then(resObj => {
                    setData(resObj);
                    setRange(resObj.bars);
                });
            } else console.log("unable to fetch");
        });

    }, []);

    const { buttons, bars, limit } = data;

    const handleClick = (e, value) => {
        e.preventDefault();
        console.log(value);
        let newRange = [];
        range && range.map((val) => {
            newRange.push(val + value < limit ? val + value : limit);
        })
        setRange(newRange);

    }
    return (
        <div className="main">
            {range && range.map((value) => {
                return (
                    <ProgressBarComponent percent={value} />
                );
            })
            }
            <div>
                <IncrementButtonComponent buttons={buttons} handleClick={(e, value) => handleClick(e, value)} />
            </div>
        </div>
    );
}

export default ProgressBarContainer;