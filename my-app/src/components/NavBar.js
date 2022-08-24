import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from "./logo.png";


function BasicExample() {
        return (
          <Navbar fixed="top-right" bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="#home">
            <img
              src={img}
            />
          </Navbar.Brand>
              <Navbar.Brand href="#home">BMW ARGENTINA</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Ventas</Nav.Link>
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
            </Container>
          </Navbar>
        );
      }

      export default BasicExample;