import React, {useEffect} from 'react'
import Link from 'next/link'
import styles from "../styles/Navbar.module.css";
import { Navbar, Container, Nav }from 'react-bootstrap'


const Secondnav = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, [])
    return (
        <div>

<Navbar className="Nav-cont fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand >
          <Link href="/">
          <a className={styles.navhomelink}>
            <bold className={styles.ayobold}> Timothy</bold> Ayodele
          </a>
        </Link>
 </Navbar.Brand>
  <Navbar.Toggle className="humm" aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav className="real-navs">

      <Nav.Link eventKey={2}>
        <Link className="the-links"  href="/">
          Home
        </Link>
      </Nav.Link>

      <Nav.Link eventKey={2}>
        <Link className="the-links"   href="/about">
          Messages 
        </Link>
      </Nav.Link>

      <Nav.Link eventKey={2}>
        <Link className="the-links"   href="/Gallery">
          Gallery
        </Link>
      </Nav.Link>

      <Nav.Link eventKey={2}>
        <Link id="the-links"   href="#contactme">
          Events
        </Link>
      </Nav.Link>

      <Nav.Link eventKey={2}>
        <Link className="the-links"   href="/About">
        Contact me
        </Link>
      </Nav.Link>
    </Nav>

    <div className="getintouch">
      <p>Get in touch</p>

      <div className="mailto">
      <a href="mailto:someone@yoursite.com">ayodeletim@mail.com</a>
      <hr />
      </div>
    </div>

  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    )
}

export default Secondnav