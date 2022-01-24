import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbars = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg"  variant="dark">
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <a className={styles.navhomelink}>
              <bold className={styles.ayobold}> Timothy</bold> Ayodele
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav className="me-auto">
        <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link eventKey={2}>
        <Link className="the-links"   href="/About">
        Contact me
        </Link>
      </Nav.Link>
        </Nav> */}
            <Nav>
              <Nav.Link eventKey={2} className="each-nav-link" href="#projects">
                Projects
              </Nav.Link>

              <Nav.Link eventKey={2} className="each-nav-link" href="#contactme">
                Contact Me
              </Nav.Link>

              <Nav.Link eventKey={2} className="each-nav-link" href="#socialmedia">
                Social Media
              </Nav.Link>

              <Nav.Link eventKey={2} className="each-nav-link" href="#about">
                About
              </Nav.Link>

              <Nav.Link eventKey={2} className="each-nav-link" href="#education">
                Education
              </Nav.Link>
            </Nav>

            <div className="getintouch">
              <p>Get in touch</p>

              <div className="mailto">
                <a href="mailto:someone@yoursite.com">ayodeletim@mail.com</a>
                <hr className="mailtoline" />
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
