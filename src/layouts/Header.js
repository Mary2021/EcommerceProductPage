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
            <header className='headerContainer'>
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
                            <Image src={cart} alt='cart icon' />
                        </Col>
                        <Col>
                            <Image src={avatar} alt='avatar icon' />
                        </Col>
                    </Row>
                </Container>
                <hr />
            </header>
        )
    } else {
        return (
            <header className='headerContainer'>
                <Row className='justify-content-center align-items-center'>
                    <Col className='pe-0'>
                        <Image src={menu} alt="Menu icon" onClick={handleShow} />
                    </Col>
                    <Col className='col-8 p-0'>
                        <Image src={logo} alt='Sneakers logo' />
                    </Col>
                    <Col className='ps-0'>
                        <Image src={cart} alt='cart icon' />
                    </Col>
                    <Col className='ps-0 pe-0'>
                        <Image fluid={true} src={avatar} alt='avatar icon' className='avatar' />
                    </Col>
                </Row>
                <Offcanvas show={show} className='w-75'>
                    <Offcanvas.Body>
                        <Image src={close} alt="Close icon" onClick={handleClose} />
                        <Nav defaultActiveKey="/home" className="flex-column pt-4">
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