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
    const [status, setStatus] = useState('');
    const [cards] = useState([]);



    const addBook = () => {
        if (
            title !== "" ||
            author !== "" ||
            description !== ""
        ) {
            const newCard = { title, author, description, status };
            cards.push(newCard);
            fetch('http://localhost:8000/cards', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newCard)
            }).then(() => {
                window.location.reload();
            })
        }
        else {
            alert("please fill the required entry")
        }

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

