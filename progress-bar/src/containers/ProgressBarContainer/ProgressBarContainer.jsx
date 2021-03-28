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

    const { buttons, limit } = data;

    const handleClick = (e, value) => {
        e.preventDefault();

        let newRange = [];
        range && range.map((val) => {

            if (val + value < 0) {
                newRange.push(0);
            } else if (val + value > limit) {
                newRange.push(limit);
            } else {
                newRange.push(val + value);
            }
        })
        setRange(newRange);

    }

    function getSum(total, num) {
        return total + num;
    }

    console.log("range: ", range);
    return (
        <Container className="main">
            <Row style={{ marginBottom: "20px" }} >
                <Col>
                    Total usage : {range.reduce(getSum, 0)}
                </Col>
            </Row>
            <Row >
                <Col>
                    {range && range.map((value) => {
                        return (
                            <ProgressBarComponent percent={value} limit={limit} />
                        );
                    })
                    }
                </Col>
            </Row>
            <Row >
                <Col>
                    <div>
                        <IncrementButtonComponent buttons={buttons} handleClick={(e, value) => handleClick(e, value)} />
                    </div>
                </Col>
            </Row>

        </Container >
    );
}

export default ProgressBarContainer;