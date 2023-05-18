import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const Navigation = (props) => {

  const styles = {
    navWidth: {
      width: 'inherit',
      maxWidth: '600px',
    },
    active: {
      color: 'black',
      textDecoration: 'none',
      backgroundColor: 'white',
      border: 'none',
    },
    inactive: {
      color: 'rgb(0 0 0 / 50%)',
      textDecoration: 'none',
      backgroundColor: 'white',
      border: 'none',
    }
  }

  return (
    <Navbar bg="white" variant="dark">
      <Container className="justify-content-center">
        <Nav className="justify-content-evenly" style={styles.navWidth}>
          {props.options.map((url, index) => (
            <Button
              key={index}
              onClick={() => props.handleCallback(url)}
              style={props.active === url ? styles.active : styles.inactive}
            >
              {url}
            </Button>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;


