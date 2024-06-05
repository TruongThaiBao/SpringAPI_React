import { Badge, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Airplane, Cart, Shop } from 'react-bootstrap-icons';

const midLinks = [
  {title: 'catalog', path: "/catalog"},
  {title: 'about', path: "/about"},
  {title: 'contact', path: "/contact"},
  {title: 'manage-product', path: "/manage-product"},
];

const rightLinks = [
  {title: 'login', path: "/login"},
  {title: 'register', path: "/register"},
];

function BootstrapNavbar() {
  return (
    <>
   <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="/">My Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/catalog">Catalog</Nav.Link>
            <Nav.Link href="/manage-product">Products</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/cart" className='position-relative'>
              <Button variant="outline-light">Cart</Button>
              <Cart size={35} className='position-absolute start-50'/> 
              <Badge bg='warning' className='position-absolute top-0 start-75'>5</Badge>
            </Nav.Link>
            <Nav.Link href="/login">
              <Button variant="outline-light">Login</Button>
            </Nav.Link>
            <Nav.Link href="/register">
              <Button variant="outline-light">Register</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default BootstrapNavbar;