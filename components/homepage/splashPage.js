import React from 'react';
import Link from 'next/link';
import { Box, Flex } from 'rebass';
import './splashPage.css';

const tiles = [
    {
        image: '../../static/data1.jpg',
        caption: 'January 24 - 25th 2020',
        to: '/schedule'
    },
    {
        image: '../../static/data2.jpg',
        caption: 'Sign Up (This Fall)',
        href: ''
    },
    {
        image: '../../static/data3.jpg',
        caption: 'Become a Sponsor',
        href: "../../static/SponsorshipPacket.pdf"
    },
    {
        image: '../../static/data4.jpg',
        caption: 'About the Datathon',
        to: '/about'
    }
]

const Image = (props) => (
    <div className='image'>
        <Box className={`image-box${props.index}`} width={350}>
            {
                props.to !== undefined ? (
                    <Link href={props.to}>
                        <h1 className='image-caption'>{props.caption}</h1>
                    </Link>
                ) : (
                        <a href={props.href}>
                            <h1 className='image-caption'>{props.caption}</h1>
                        </a>
                    )
            }
        </Box>
        <style>{`
            .image-box${props.index} {
                width: 350px;
                height: 200px;
                position: relative;
                z-index: 200;
                overflow: hidden;
                margin: 20px;
            }
            .image-box${props.index}:before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                background-image: url(${props.image});
                background-position: center;
                background-size: cover;
                transition: 0.3s ease-in-out;
            }
            .image-box${props.index}:after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 100px;
                z-index: -1;
                background-color: black;
                opacity: 0.5;
                box-shadow: 0 0 20px 20px black;
                transition: 0.3s ease-in-out;
            }
            .image-caption {
                color: white;
                position: absolute;
                top: 90px;
                text-align: center;
                width: 100%;
                font-weight: normal;
                transition: 0.3s ease-in-out;
            }
            .image-box${props.index}:hover:before {
                transform: scale(1.3);
            }
            .image-box${props.index}:hover:after {
                height: 100%;
                opacity: 0.8
            }
            .image-box${props.index}:hover .image-caption {
                top: 50px;
            }
            .image-caption:hover {
                cursor: pointer;
            }
        `}</style>
    </div>
)

const SplashPage = () => (
    <div className='splashpage'>
        <Box width={[1, 0.7]} ml='auto' mr='auto'>
            <Flex flexDirection='row' flexWrap='wrap' justifyContent='center'>
                {
                    tiles.map(tile => (
                        <Image image={tile.image} index={tiles.indexOf(tile)} caption={tile.caption} to={tile.to} href={tile.href} key={tile.image} />
                    ))
                }
            </Flex>
        </Box>

    </div>
)

export default SplashPage;