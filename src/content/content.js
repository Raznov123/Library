import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './cards.js'
import useFetch from '../userFetch.js';
import React, { useState, useEffect } from 'react';

function Content() { 
    const {data:cards} = useFetch('http://localhost:8000/cards');
    return (
        <Container>
            <Row>
                <Col className='cardWidth'>
                    {cards && <Cards  cards={cards}  />}
                </Col>
            </Row>
        </Container>
    );
};

export default Content;