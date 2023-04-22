import { useEffect, useState } from 'react'
import menu from './../images/icon-menu.svg'
import logo from './../images/logo.svg'
import cart from './../images/icon-cart.svg'
import avatar from './../images/image-avatar.png'
import close from './../images/icon-close.svg'
import { Nav, Image, Row, Col, Offcanvas, Container } from 'react-bootstrap'

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
            <header >
                <Container className='headerContainer ps-0 pe-0'>
                <Row>
                    <Col md={3} lg={3} xl={2}>
                        <Image src={logo} alt='Sneakers logo' className='Logo' />
                    </Col>
                    <Col md={8} lg={8} xl={9} className='pe-0'>
                        <Nav defaultActiveKey="/home" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link href="/home" className='navLink'>Collections</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-1" className='navLink'>Men</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2" className='navLink'>Women</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2" className='navLink'>About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2" className='navLink'>Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col md={1} lg={1} xl={1} className='ps-0 pe-0'>
                        <Image src={cart} alt='cart icon' className='cartIcon' />
                        <Image src={avatar} alt='avatar icon' className='avatar' />
                    </Col>
                    {/* <Col xl={1}>
                        <Image src={avatar} alt='avatar icon' className='avatar' />
                    </Col> */}
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