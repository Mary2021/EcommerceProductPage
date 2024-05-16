import { useEffect, useState } from 'react'
import { Nav, Image, Row, Col, Offcanvas, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import menu from './../images/icon-menu.svg'
import logo from './../images/logo.svg'
import cart from './../images/icon-cart.svg'
import avatar from './../images/image-avatar.png'
import close from './../images/icon-close.svg'
import del from './../images/icon-delete.svg'
import thumb from './../images/image-product-1-thumbnail.jpg'
import Badge from 'react-bootstrap/Badge';
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../counterSlice";

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [open, setOpen] = useState(false);
    const handleHide = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const amount = useSelector((state) => state.counter.amount);
    const dispatch = useDispatch();

    const showBadge = () => {
        if (amount != 0) {
            return (
                <Badge pill className='cartBadge'>
                    {amount}
                </Badge>
            )
        } else {
            return null
        }
    }

    const openCart = () => {
        if (amount != 0) {
            let totalPrice = ''
            let txt = ''
            let priceLabel = ''
            if (amount == 1) {
                txt = null
            } else {
                totalPrice = (125 * amount).toFixed(2);
                priceLabel = '$' + totalPrice
                txt = ' ' + 'x' + ' ' + amount + ' '
            }

            return (<Modal show={open} onHide={handleHide} >
                <Modal.Header>
                    <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className='modalRow'>
                        <Col xs={2} sm={2} md={3} lg={3} xl={3} className='modalThumbCol'><Image src={thumb} alt='Product thumbnail' className='modalThumb' /></Col>
                        <Col xs={8} sm={6} md={8} lg={8} xl={8} className='modalText'>Fall Limited Edition Sneakers $125.00 {txt}<b>{priceLabel}</b></Col>
                        <Col xs={1} sm={1} md={1} lg={1} xl={1} className='modalDelBtn'><Image type="button" src={del} alt='Delete button' onClick={() => dispatch(reset())} /></Col>
                    </Row>
                    <Button variant="primary" onClick={handleHide} className='modalCheckoutBtn'>
                        Checkout
                    </Button>
                </Modal.Body>
            </Modal>)
        } else {
            return (
                <Modal show={open} onHide={handleHide} >
                    <Modal.Header>
                        <Modal.Title>Cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className='modalRow'>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className='emptyModalText'>Your cart is empty.</Col>
                        </Row>
                        <Button variant="primary" onClick={handleHide} className='modalCheckoutBtn'>
                            Checkout
                        </Button>
                    </Modal.Body>
                </Modal>)
        }

    }

    const offcanvasPlacement = () => {
        let placement = ''
        if (window.outerWidth > 577 && window.outerWidth < 768) {
            placement = 'top'
            return placement
        } else {
            placement = 'start'
            return placement
        }
    }

    const widthClassname = () => {
        let classname = ''
        if (window.outerWidth > 577 && window.outerWidth < 767) {
            classname = 'w-100'
            return classname
        } else {
            classname = 'w-75'
            return classname
        }
    }

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

    console.log(amount)

    if (window.innerWidth >= 768) {
        return (
            <header>
                <Container className='headerContainer ps-0 pe-0'>
                    <Row>
                        <Col md={3} lg={2} xl={2} className='logo' >
                            <Image src={logo} alt='Sneakers logo' />
                        </Col>
                        <Col md={7} lg={8} xl={8} className='pe-0 linkList'>
                            <Nav defaultActiveKey="/EcommerceProductPage/" as="ul">
                                <Nav.Item as="li">
                                    <Nav.Link href="/EcommerceProductPage/" className='navLink ps-1 pe-1'>Collections</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-1" className='navLink ps-1 pe-1'>Men</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-2" className='navLink ps-1 pe-1'>Women</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-2" className='navLink ps-1 pe-1'>About</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-2" className='navLink ps-1 pe-1'>Contact</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={2} lg={2} xl={2} className='ps-0 pe-0'>
                            <Row>
                                <Col className='ps-lg-5 ps-md-2 pe-md-0'>
                                    <Image src={cart} type="button" alt='cart icon' className='cartIcon' onClick={handleOpen} />
                                    {showBadge()}
                                    {openCart()} 
                                </Col>
                                <Col className='ps-lg-0 pe-lg-0'>
                                    <Image src={avatar} type="button" alt='avatar icon' className='avatar' />
                                </Col>
                            </Row>
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
                    <Col className='col-6 p-0'>
                        <Image src={logo} alt='Sneakers logo' />
                    </Col>
                    <Col className='ps-1 pe-0' id='imgContainer'>
                        <Image src={cart} type="button" alt='cart icon' onClick={handleOpen} />
                        {showBadge()}
                        {openCart()}
                    </Col>
                    <Col className='ps-0 pe-0'>
                        <Image fluid={true} type="button" src={avatar} alt='avatar icon' className='avatar' />
                    </Col>
                </Row>
                <Offcanvas show={show} placement={offcanvasPlacement()} className={widthClassname()}>
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