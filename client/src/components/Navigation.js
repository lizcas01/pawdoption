import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = (props) => {

  const urls = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Matchup', url: '/matchup' },
    { name: 'Vote', url: '/vote' },
  ];

  const styles = {
    navWidth: {
      width: 'inherit',
      maxWidth: '600px',
    },
    active: {
      color: 'black',
      textDecoration: 'none',
    },
    inactive: {
      color: 'rgb(0 0 0 / 50%)',
      textDecoration: 'none',
    }
  }

  return (
    <Navbar bg="white" variant="dark">
      <Container className="justify-content-center">
        <Nav className="justify-content-evenly" style={styles.navWidth}>
          {urls.map((url) => (
            <Nav.Link
              key={url.name}
              href={url.url}
              style={props.active === url.url ? styles.active : styles.inactive}
            >
              {url.name}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;


