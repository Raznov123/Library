import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo.png'
import ButtonModal from './buttonModal';



function Header() {
    return (
        <Navbar className='navColor' style={{ height: '9rem' }}>
            <Container >
                <Navbar.Brand className='textColor' href="#home"> {' '}Library</Navbar.Brand>
                <img
                    src={Logo}
                    style={{ width: '200px', height: '140px', marginRight: '10px' }}
                    alt="Logo"
                />
                <Nav>
                    <ButtonModal books/>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
