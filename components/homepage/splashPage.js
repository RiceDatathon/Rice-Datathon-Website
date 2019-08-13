import React from 'react';
import { Box, Flex, Image } from 'rebass';
import './splashPage.css';

const images = ['../../static/data1.jpg', '../../static/data2.jpg', '../../static/data3.jpg', '../../static/data4.jpg']

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: props.images,
            current: 0,
            max: props.images.length,
            interval: null
        }
        this.switchImage = this.switchImage.bind(this)
    }

    switchImage() {
        let newState = this.state.current + 1;
        if (newState == this.state.max) {
            newState = 0;
        }
        this.setState({ current: newState })
    }

    componentDidMount() {
        this.state.interval = window.setInterval(this.switchImage, 2000)
    }

    componentWillUnmount() {
        window.clearInterval(this.state.interval)
    }

    render() {
        return (
            <Box width={[0.9, 0.4]}>
                <Image src={this.state.images[this.state.current]} />
            </Box>
        )
    }
}

const SplashPage = () => (
    <div className='splashpage'>
        {/* <Box width={[0.8, 0.5]} ml='auto' mr='auto' className='intro-logo' style={{marginTop: '10%'}}>
            <Image src='../../static/datathon-logo.png' />
        </Box> */}
        <Flex flexDirection='row' flexWrap='wrap' justifyContent='center' style={{marginTop: '10%'}}>
            <Carousel images={images} />
            <Box width={[0.9, 0.3]} className='splashpage-content'>
                <h2 className='date'>Jan 24 - 25th 2020</h2>
                <Box  ml='auto' mr='auto' mt={40}>
                    <div className='intro-link'>
                        <h4 className='sign-up-link-text'>Sign Up</h4>
                        <p className='sign-up-link-alt'>Registration will open fall 2019</p>
                    </div>
                </Box>
                <Box ml='auto' mr='auto' mt={20} className='sponsor-button'>
                    <a href='../../static/SponsorshipPacket.pdf' style={{ textDecoration: 'none' }} target='_blank' rel="noopener noreferrer">
                        <div className='intro-link'>
                            <h4 className='sponsor-link-text'>Become a Sponsor</h4>
                        </div>
                    </a>
                </Box>
            </Box>
        </Flex>
    </div>
)

export default SplashPage;