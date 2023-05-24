import { useEffect, useState } from 'react'
import { Badge, Button, ButtonGroup, Carousel, Col, Container, Image, InputGroup, Row } from 'react-bootstrap'
import pic1 from './../images/image-product-1.jpg'
import pic2 from './../images/image-product-2.jpg'
import pic3 from './../images/image-product-3.jpg'
import pic4 from './../images/image-product-4.jpg'
import minus from './../images/icon-minus.svg'
import plus from './../images/icon-plus.svg'
import cart from './../images/icon-cart.svg'

const Main = () => {
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

    //get carousel indicator button by aria-label, set id to button element and set background image with id
    useEffect(() => {
    let element1 = document.querySelector('[aria-label="Slide 1"]')
    let element2 = document.querySelector('[aria-label="Slide 2"]')
    let element3 = document.querySelector('[aria-label="Slide 3"]')
    let element4 = document.querySelector('[aria-label="Slide 4"]')

    if (element1!=null && window.outerWidth >= 768 ) {
        element1.setAttribute('id','btn1')
    }
    if ((element2!=null && window.outerWidth >= 768 )) {
        element2.setAttribute('id','btn2')
    }
    if ((element3!=null && window.outerWidth >= 768 )) {
        element3.setAttribute('id','btn3')
    }
    if ((element4!=null && window.outerWidth >= 768 )) {
        element4.setAttribute('id','btn4')
    }
    })

    if (window.outerWidth >= 768) {
        return (
            <main className='mainContainer'>
                <article>
                    <Container>
                        <Row>
                            <Col md={5}>
                                <figure>
                                    <Container className='p-0 w-75 ms-2 me-2 tabletFigure'>
                                        <Carousel controls={false} interval={null} >
                                            <Carousel.Item>
                                                <img
                                                    className="w-100"
                                                    src={pic1}
                                                    alt="First slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="w-100"
                                                    src={pic2}
                                                    alt="First slide"
                                                />
                                            </Carousel.Item><Carousel.Item>
                                                <img
                                                    className="w-100"
                                                    src={pic3}
                                                    alt="First slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="w-100"
                                                    src={pic4}
                                                    alt="First slide"
                                                />
                                            </Carousel.Item>
                                        </Carousel>
                                    </Container>
                                </figure>
                            </Col>
                            <Col md={7}>
                                <Container className='productInfo'>
                                    <h6 className='orange companyName'>
                                        Sneaker Company
                                    </h6>
                                    <h1 className='productHeading'>
                                        Fall Limited Edition Sneakers
                                    </h1>
                                    <p className='productText'>
                                        These low-profile sneakers are your perfect casual wear companion. Featuring a
                                        durable rubber outer sole, they`ll withstand everything the weather can offer.
                                    </p>
                                    <Row className='ms-0 me-0 mb-2 align-items-center'>
                                        <Col md={3} lg={3} xl={2} className='lowerPrice'>$125.00</Col>
                                        <Col md={2} lg={2} xl={2}><Badge className='badge' bg='false'>50%</Badge></Col>
                                    </Row>
                                    <Row className='ms-0 me-0 mb-4 align-items-center regularPrice'>$250.00</Row>
                                    <Row>
                                        <Col md={5} lg={5} xl={4}>
                                            <div>
                                                <ButtonGroup className="mb-2 w-100" size="lg">
                                                    <Button className='bg-light border-light'><img src={minus}></img></Button>
                                                    <InputGroup.Text id="btnGroupAddon2" className="square rounded-0 bg-light  border-light">0</InputGroup.Text>
                                                    <Button className='bg-light border-light'><img src={plus}></img></Button>
                                                </ButtonGroup>
                                            </div>
                                        </Col>
                                        <Col md={7} lg={7} xl={8}>
                                            <Button className='cartBtn w-100' size="lg">
                                                <Image src={cart} alt='cart icon' className='cartImg' />Add to cart
                                            </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </article>
            </main>)
    } else {
        return (
            <main>
                <article>
                    <figure>
                        <Container className='p-0'>
                            <Carousel indicators={false}>
                                <Carousel.Item>
                                    <img
                                        className="w-100"
                                        src={pic1}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="w-100"
                                        src={pic2}
                                        alt="First slide"
                                    />
                                </Carousel.Item><Carousel.Item>
                                    <img
                                        className="w-100"
                                        src={pic3}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="w-100"
                                        src={pic4}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Container>
                    </figure>
                    <Container>
                        <h6 className='orange companyName'>
                            Sneaker Company
                        </h6>
                        <h1>
                            Fall Limited Edition Sneakers
                        </h1>
                        <p>
                            These low-profile sneakers are your perfect casual wear companion. Featuring a
                            durable rubber outer sole, they`ll withstand everything the weather can offer.
                        </p>
                        <Row className='ms-0 me-0 mb-3 align-items-center'>
                            <Col xs={3} className='lowerPrice'>$125.00</Col>
                            <Col xs={7}><Badge className='badge' bg='false'>50%</Badge></Col>
                            <Col xs={2} className='regularPrice'>$250.00</Col>
                        </Row>
                        <div>
                            <ButtonGroup className="mb-2 w-100" size="lg">
                                <Button className='bg-light border-light'><img src={minus}></img></Button>
                                <InputGroup.Text id="btnGroupAddon2" className="square rounded-0 bg-light border-light w-75 quantity">0</InputGroup.Text>
                                <Button className='bg-light border-light'><img src={plus}></img></Button>
                            </ButtonGroup>
                        </div>
                        <Button className='cartBtn w-100' size="lg">
                            <Image src={cart} alt='cart icon' className='cartImg' />Add to cart
                        </Button>
                    </Container>
                </article>
            </main>)
    }

}

export default Main