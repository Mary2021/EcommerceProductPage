import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import logo from './../images/logo.svg'
import menu from './../images/icon-menu.svg'
import x from './../images/icon-close.svg'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
    let [open, setOpen] = useState(false)
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

    document.className = open ? 'visible' : 'hidden';

    if (window.outerWidth >= 768) {
        return (
            <nav className='Menu'>
                <img src={logo} alt='logo' className='Logo' />
                {/* <a className='MenuLink'>Home</a>
                <a className='MenuLink'>Shop</a>
                <a className='MenuLink'>About</a>
                <a className='MenuLink'>Contact</a> */}

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
            </nav>
        )
    } else {
        return (
            <div className='Menu'>
                <img src={menu} className="MenuIcon" alt="MenuIcon" onClick={() => setOpen(!open)} />
                <img src={logo} alt='logo' className='Logo' />
                <div className={document.className}>
                    {/* <Container>
                    <img src={x} className="CloseIcon" alt="CloseIcon" onClick={() => setOpen(!open)}/>
                    <div className='LinkContainer'>
                        <a className='MenuLink'>Collections</a>
                        <a className='MenuLink'>Men</a>
                        <a className='MenuLink'>Women</a>
                        <a className='MenuLink'>About</a>
                        <a className='MenuLink'>Contact</a>
                    </div>
                </Container> */}
                    <img src={x} className="CloseIcon" alt="CloseIcon" onClick={() => setOpen(!open)} />
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link >Collections</Nav.Link>
                        <Nav.Link>Men</Nav.Link>
                        <Nav.Link>Women</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                        <Nav.Link>Contact</Nav.Link>
                    </Nav>
                </div>
            </div>
        )
    }
}

export default NavBar