import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Farmácia</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/funcionarios">Funcionário</Nav.Link>
            <Nav.Link href="/clientes">Cliente</Nav.Link>
            <Nav.Link href="/estoque">Estoque</Nav.Link>
            <Nav.Link href="/vendas">Venda</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
export default Header;