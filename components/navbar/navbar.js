import React from 'react';
import Link from 'next/link';
import { Box, Image } from 'rebass';
import './navbar.css';

const links = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'About',
        href: 'about'
    },
    {
        name: 'Schedule',
        href: 'schedule'
    },
    {
        name: 'Tracks',
        href: 'tracks'
    },
    {
        name: 'Prizes',
        href: 'prizes'
    },
    {
        name: 'FAQs',
        href: 'faqs'
    }
]

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <div>
                <Box width={[0.8, 0.3]} className='datathon-logo'>
                    <Image src='../../static/datathon-logo.png' alt='Rice Datathon' />
                </Box>
                <div className={this.state.open ? ('navbar-visible') : ('navbar-hidden')}>
                    <h1 className={this.state.open ? ('navbar-toggle-open') : ('navbar-toggle-closed')} onClick={this.toggleNavbar}>+</h1>
                    {
                        links.map(({ name, to, href }) => (
                            <div className='navbar-item' key={name} onClick={this.toggleNavbar}>
                                <Link href={href}>
                                    <p>{name}</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>

        )
    }
}


export default Navbar;