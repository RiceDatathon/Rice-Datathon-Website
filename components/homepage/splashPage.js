import { Box, Image } from 'rebass';
import './splashPage.css';


const SplashPage = () => (
    <div className='splashpage'>
        <Box width={[0.8, 0.5]} ml='auto' mr='auto' className='intro-logo' style={{marginTop: '10%'}}>
            <Image src='../../static/datathon-logo.png' />
        </Box>
        <h2 className='date'>Jan 24st - 25th 2020</h2>

        <Box width={[0.5, 0.4, 0.35, 0.2]} ml='auto' mr='auto' mt={40}>
            <div className='intro-link'>
                <h4 className='sign-up-link-text'>Sign Up</h4>
                <p className='sign-up-link-alt'>Registration will open fall 2019</p>
            </div>
        </Box>
        <Box width={[0.7, 0.27]} ml='auto' mr='auto' mt={20} className='sponsor-button'>
            <a href='../../static/SponsorshipPacket.pdf' style={{ textDecoration: 'none' }} target='_blank' rel="noopener noreferrer">
                <div className='intro-link'>
                    <h4 className='sponsor-link-text'>Become a Sponsor</h4>
                </div>
            </a>
        </Box>
        <div style={{ height: '100px' }} />
    </div>
)

export default SplashPage;