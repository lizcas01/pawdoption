import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import Auth from "../utils/auth";

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

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Navbar bg="white" variant="dark">
      <Container className="justify-content-center">
        <Nav className="justify-content-evenly" style={styles.navWidth}>
          {Object.keys(props.options).map((url, index) => {
            if (props.options[url].displayInNav) {
              return (
                <Button
                  key={index}
                  onClick={() => props.handleCallback(url)}
                  style={props.active === props.options[url].name ? styles.active : styles.inactive}
                >
                  {props.options[url].name}
                </Button>
              )
            }
          })}
          {Auth.loggedIn() && (
            <>
              <div className='d-flex align-items-center'>

                <span>Welcome, {Auth.getProfile().data.username}!</span>
                <Button variant="outline-primary" className="m-2" onClick={logout}>
                  Logout
                </Button>
              </div>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;


