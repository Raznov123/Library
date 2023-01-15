import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



function Edit(card) {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    const editBook = (card) => {
        if (
            title !== "" ||
            author !== "" ||
            description !== ""
        ) {
            card.card.title = title;
            card.card.author = author;
            card.card.description = description;
            card.card.status = status;
            fetch(`http://localhost:8000/cards/${card.card.id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(card.card)
            }).then(() => {
                setShow(false);
                handleClose(true);
                window.location.reload();
            })
        }
        else {
            alert("please fill the required entry")
        }

    };



    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editing the book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formControl">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={title}
                                required
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                value={author}
                                required
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="FromControl2">
                            <Form.Label>Summary</Form.Label>
                            <Form.Control
                                as="textarea" rows={3}
                                type="text"
                                value={description}
                                required
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Select
                            value={status}
                            aria-label="Default select example"
                            onChange={(e) => setStatus(e.target.value)}>
                            <option>Reading status</option>
                            <option value="UnRead">UnRead</option>
                            <option value="Read">Read</option>
                        </Form.Select>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button  onClick={handleClose} variant="secondary">
                        Close
                    </Button>
                    <Button
                        className='buttonColor'
                        onClick={() => editBook(card)}>
                        Edit Book
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Edit;

