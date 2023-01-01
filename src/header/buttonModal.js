import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



function ButtonModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [cards, setCards] = useState([]);


    const addBook =() => {
        const newCard = { title, author, description };
        cards.push(newCard);
        console.log(cards);
    };


    return (
        <div>
            <Button className='buttonColor' variant="info" size="sm" onClick={handleShow}>
                Add Book
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Adding a book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formControl">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="FromControl2">
                            <Form.Label>Summary</Form.Label>
                            <Form.Control
                                as="textarea" rows={3}
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        className='buttonColor'
                        onClick={() => addBook()}>
                        Add Book
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ButtonModal;

