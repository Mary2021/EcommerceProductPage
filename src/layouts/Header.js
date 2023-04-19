import { useEffect, useState } from 'react'
import menu from './../images/icon-menu.svg'
import logo from './../images/logo.svg'
import cart from './../images/icon-cart.svg'
import avatar from './../images/image-avatar.png'
import close from './../images/icon-close.svg'
import { Nav, Container, Image, Row, Col, Offcanvas } from 'react-bootstrap'

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })

    if (window.outerWidth >= 500) {
        return (
            <header className='Menu'>
                <Container fluid>
                    <Row>
                        <Col>
                            <Image src={logo} alt='Sneakers logo' className='Logo' />
                        </Col>
                        <Col md='auto'>
                            <Nav defaultActiveKey="/home" as="ul">
                                <Nav.Item as="li">
                                    <Nav.Link href="/home">Collections</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-1">Men</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-2">Women</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-2">About</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-2">Contact</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col>
                            <Image src={cart} alt='cart icon' className='Cart' />
                        </Col>
                        <Col>
                            <Image src={avatar} alt='avatar icon' className='Avatar' />
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    } else {
        return (
            <header className='Menu'>
                <Image src={menu} className="MenuIcon" alt="MenuIcon" onClick={handleShow} />
                <Image src={logo} alt='Sneakers logo' className='Logo' />
                <Image src={cart} alt='cart icon' className='Cart' />
                <Image fluid={true} src={avatar} alt='avatar icon' className='Avatar' />
                <Offcanvas show={show} className='w-75'>
                    <Offcanvas.Body>
                        <Image src={close} className="CloseIcon" alt="CloseIcon" onClick={handleClose} />
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link >Collections</Nav.Link>
                            <Nav.Link>Men</Nav.Link>
                            <Nav.Link>Women</Nav.Link>
                            <Nav.Link>About</Nav.Link>
                            <Nav.Link>Contact</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </header>
        )
    }
}

export default Header