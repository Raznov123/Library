import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './cards.js'


function Content() {
    return (
        <Container>
            <Row>
                <Col className='cardWidth'>
                    {Cards("Book Title", "Author Name", true)}
                    {Cards("Book Title", "Author Name", true)}
                    {Cards("Book Title", "Author Name", false)}
                    {Cards("Book Title", "Author Name", false)}
                    {Cards("Book Title", "Author Name", false)}
                    {Cards("Book Title", "Author Name", false)}
                    {Cards("Book Title", "Author Name", false)}
                    {Cards("Book Title", "Author Name", false)}
                    
                </Col>
            </Row>
        </Container>
    );
};

export default Content;