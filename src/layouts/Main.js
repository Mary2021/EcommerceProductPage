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

    if (window.outerWidth >= 500) {
        return (<main>
            <article>
                <Container>
                    <Row>
                        <Col>
                            <figure>
                                <Container className='p-0'>
                                    <Carousel >
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
                        <Col>
                            <Container>
                                <h6 className='orange'>
                                    Sneaker Company
                                </h6>
                                <h1>
                                    Fall Limited Edition Sneakers
                                </h1>
                                <p>
                                    These low-profile sneakers are your perfect casual wear companion. Featuring a
                                    durable rubber outer sole, they`ll withstand everything the weather can offer.
                                </p>
                                <div>
                                    $125.00
                                    <Badge className='badgeColor' bg='false'>50%</Badge>
                                    $250.00
                                </div>
                                <div>
                                    <ButtonGroup className="mb-2 w-100">
                                        <Button className='bg-light border-light'><img src={minus}></img></Button>
                                        <InputGroup.Text id="btnGroupAddon2" className="square rounded-0 bg-light  border-light">0</InputGroup.Text>
                                        <Button className='bg-light border-light'><img src={plus}></img></Button>
                                    </ButtonGroup>
                                </div>
                                <Button className='cartBtn w-100'>
                                    <Image src={cart} alt='cart icon' className='cartImg' />Add to cart
                                </Button>
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