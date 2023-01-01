import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';
import React, { useState } from 'react';

const book = {
  title: 'title',
  author: 'author',
  summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  read: "unread"
};

function BgColorExample() {
  
  return (
    <>
      {[
        'Primary',
      ].map((variant) => (
        <Card
          style={{ width: '18rem' }}
          className="cardsColor"
        >
          <Card.Header className='centering'>
            {book.title}
            <CloseButton className="closeButton" variant="white" />
          </Card.Header>
          <Card.Body>
            <Card.Title className='centeringh'> {book.author} </Card.Title>
            <Card.Text className='centeringh'>
              {book.summary}
            </Card.Text>
            <Card.Footer>
              <small className="centeringFooterCard">{book.read}</small>
            </Card.Footer>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default BgColorExample;