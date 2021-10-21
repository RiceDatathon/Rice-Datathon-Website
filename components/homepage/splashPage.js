import React from 'react';
import Link from 'next/link';
import { Box, Flex, Image } from 'rebass';
import Title from '../title/title'
import './splashPage.css';

const tiles = [
    {image: '../../static/cover/data6.jpg',
    caption: 'Become a Sponsor →',
    href: "../../static/SponsorshipPacket2022.pdf"},

    {image: '../../static/cover/2022bannerlarge.png',
    caption: 'Datathon Highlights →',
    href: "https://www.youtube.com/watch?v=ekMC3uENZC8"
    }
    
]

const CoolImage = (props) => (
    <div className='image'>
        <Box className={`image-box${props.index}`} width={350}>
            {
                props.to !== undefined ? (
                    <Link href={props.to}>
                        <div className='image-caption-container'>
                            <h1 className='image-caption'>{props.caption}</h1>
                        </div>
                    </Link>
                ) : (
                        <a href={props.href}>
                            <div className='image-caption-container'>

                                <h1 className='image-caption'>{props.caption}</h1>
                            </div>
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
            .image-caption-container {
                height: 100%;
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
            .image-caption-container:hover {
                cursor: pointer;
            }
        `}</style>
    </div>
)

const SplashPage = () => (
    <div className='splashpage'>
        <Title title="Rice Datathon 2022 will take place on January 21-22, 2022. Check back later for updates!" width={[1, .65]}/>
        <Box width={[1, 0.7]} ml='auto' mr='auto'>
            {/* <Title title="Quick Links" width={[0.8, 0.4]} /> */}
            <Flex className="quick-links" flexDirection='row' flexWrap='wrap' justifyContent='center'>
                {/*https://rice-datathon-2020.devpost.com/*/}
                {/*https://piazza.com/class/k58n0jdmc721zx*/}
                {/*https://ricedatathon2020.slack.com/join/shared_invite/enQtODU2NTAxNzU0MzQxLTBiYmFlYzkxZDNjMDFjNGJiYzQ2YmVhMzFlMDEyMTMyZGNiZDJlZDUxY2JlM2QzZmJkODRiMGQxMzI0MjYyMDk*/}
                {/* <a href="https://the-2021-rice-datathon.devpost.com/" target="_blank"><h3>Devpost</h3></a> */}
                {/* <a href="https://piazza.com/rice/spring2021/rds103" target="_blank"><h3>Piazza</h3></a> */}
                {/* <a href="https://join.slack.com/t/riceds/shared_invite/zt-lrztdod3-AUOkRTFPobdtG_PEbAEBaA" target="_blank"><h3>Slack</h3></a> */}
                {/*<a href="https://docs.google.com/presentation/d/1TlqM4wdSpreIJPW0M-eEt-kRJRZ1_yGtwdIVXcCUE5M/edit?usp=sharing"  target="_blank"><h3>Opening Presentation</h3></a>*/}
                {/* <a href="http://bit.ly/ricedatathon2021-oc" target="_blank"><h3>Opening Presentation</h3></a> */}
            </Flex>

            <Flex flexDirection='row' flexWrap='wrap' justifyContent='center'>
                {
                    tiles.map(tile => (
                        <CoolImage image={tile.image} index={tiles.indexOf(tile)} caption={tile.caption} to={tile.to} href={tile.href} key={tile.image} />
                    ))
                }
            </Flex>
            {/* <Title title="Thank you to our Sponsors!" width={[1, 0.6]} /> */}
            <Box width={[.9, .9]} ml='auto' mr='auto'>
                {/*<h2 style={{ fontWeight: "normal", color: "#2B354C" }}>Gold Sponsors</h2>*/}
                <Flex justifyContent="center" flexWrap="wrap" flexDirection="row">

                    {/* <Box width={240} mt={15}> */}
                        {/* <Image src="../../static/color_logo/1.png" alt="" mt={35} /> */}
                    {/* </Box> */}

                    {/* <Box width={280} mt={50}> */}
                        {/* <Image src="../../static/color_logo/2.png" alt="" /> */}
                    {/* </Box> */}

                    {/* <Box width={280} mt={50}> */}
                        {/* <Image src="../../static/color_logo/3.png" alt="" /> */}
                    {/* </Box> */}

                    {/* <Box width={280} m={50}> */}
                        {/* <Image src="../../static/color_logo/4.png" alt="" /> */}
                    {/* </Box> */}

                    <Box width={280} m={40}>
                        <Image src="../../static/white_logo/d2k.png" alt="" />
                    </Box>

                    <Box width={280} m={40}>
                        <Image src="../../static/color_logo/square_uppercase.png" alt="" />
                    </Box>

                    <Box width={240} m={40}>
                        <Image src="../../static/color_logo/goldman_sachs.png" alt="" />
                    </Box>

                    <Box width={240} m={40}>
                        <Image src="../../static/color_logo/chevron.png" alt="" />
                    </Box>

                    <Box width={280} m={40}>
                            <Image src="../../static/color_logo/mic.png" alt=""/>
                    </Box>

                    <Box width={280} m={55}>
                        <Image src="../../static/color_logo/aimpoint.svg" alt=""/>
                    </Box>

                    <Box width={280} m={40}>
                        <Image src="../../static/white_logo/teknoir.svg" alt=""/>
                    </Box>

                </Flex>
                {/*<h2 style={{ fontWeight: "normal", color: "#2B354C" }}>Silver Sponsors</h2>*/}
                {/*<Flex justifyContent="center" flexWrap="wrap" flexDirection="row">*/}
                {/*    <Box width={180}>*/}
                {/*        <Image src="../../static/chevron.svg" alt="" />*/}
                {/*    </Box>*/}
                {/*    <Box width={200}>*/}
                {/*        <Image src="../../static/accenture.png" alt="" />*/}
                {/*    </Box>*/}
                {/*</Flex>*/}
            </Box>
        </Box>

    </div >
)

export default SplashPage;