import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';
import React, { useEffect, useState } from 'react';
import icon from './pencil.svg'
import Edit from './edit.js'


function BgColorExample({ cards }) {
  const [show, setShow] = useState(false);
  const editButton = () => {
    setShow(true);
  }
  const changeStatus = (card) => {
    if (card.status == "UnRead") {
      card.status = "Read"
      fetch(`http://localhost:8000/cards/${card.id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(card)
      }).then(() => {
        window.location.reload();
      })
    } else {
      card.status = "UnRead"
      fetch(`http://localhost:8000/cards/${card.id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(card)
      }).then(() => {
        window.location.reload();
      })
    }
  }


  const handleClick = (card) => {
    fetch('http://localhost:8000/cards/' + card.id, {
      method: 'DELETE'
    }).then(() => {
      window.location.reload();
    })
  }



  return (
    <>
      {cards.map((card) => (
        <Card
          style={{ width: '18rem' }}
          className="cardsColor"
          key={card}
        > 
          <Card.Header className='centering'>
          <img  onClick={() => editButton()} className='iconColor'
                    src={icon}
                    style={{ fill:"white" }}
                    alt="Logo"
                />
            {card.title}
            <CloseButton  onClick={() => handleClick(card)} className="closeButton" variant="white" />
          </Card.Header>
          <Card.Body>
            <Card.Title className='centeringh'> {card.author} </Card.Title>
            <Card.Text className='centeringh'>
              {card.description}
            </Card.Text>
            <Card.Footer>
              <small  onClick={() => changeStatus(card)} className="centeringFooterCard">{card.status}</small>
             {show && <Edit card={card} />}
            </Card.Footer>
          </Card.Body>
        </Card>
      ))} 
      
    </>
  );
}

export default BgColorExample;