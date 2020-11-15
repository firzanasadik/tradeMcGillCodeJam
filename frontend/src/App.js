import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Cursor from "./containers/Cursor"
import Routes from "./Routes";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <div className="App container py-3">
      <Cursor />
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        {/*links back to home page */}
        <Navbar.Brand href="/" className="font-weight-bold text-muted">
          McGill Trading
        </Navbar.Brand>
        <Navbar.Toggle />
        {/* navbar.collapse ensures that on mobile devices the two links will be collapse */}
        <Navbar.Collapse className="justify-content-end">
          {/*Routes it to the new link without refreshing the page */}
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/signup">
              <Nav.Link href="/signup">Signup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link href="/login">Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;