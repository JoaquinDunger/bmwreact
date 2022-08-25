import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from "./logo.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function BasicExample(props) {
        return (
          <Navbar fixed="top-right" bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="#home">
            <img
              src={img} alt='logo'
            />
          </Navbar.Brand>
              <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">{props.subtitle}</Nav.Link>
                  <Nav.Link href="#link">Compras</Nav.Link>
                  <NavDropdown title="Vehiculos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Convertibles</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Deportivos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Todo tereno</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Financiamiento
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
              <img src={ShoppingCartIcon} alt='markt' />
            </Container>
          </Navbar>
        );
      }

      export default BasicExample;