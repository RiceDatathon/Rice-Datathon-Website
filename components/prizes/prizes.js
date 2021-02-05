import { Box, Flex } from 'rebass';
import Title from '../title/title.js';
import '../title/title.css';
import './prizes.css';

const Prizes = () => (
    <div className="prizes">
        <Title title="Prizes" width={[0.5, 0.2]} />
        <Flex flexDirection='row' flexWrap='wrap' justifyContent='center' className='prize-list'>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>1st Place</h1>
                <p>$400 per person</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>2nd Place</h1>
                <p>$200 per person</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>3rd Place</h1>
                <p>$100 per person</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>Best Underclass-men Team</h1>
                <p>$100 per person</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>Best Visualization</h1>
                <p>$75 per person</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>Best Social Impact</h1>
                <p>$75 per person</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>Houston/ COVID Track</h1>
                <p>$75 per person</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>Bill.com </h1>
                <p>8th generation iPad 32GB per person</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>Chevron 1st Place</h1>
                <p>Airpods Pro per person</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>Chevron 2nd Place</h1>
                <p>$100 Amazon gift card per person</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>Quantlab</h1>
                <p>0.005 Bitcoin per person</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>2nd.MD</h1>
                <p>Apple Watch SE per person</p>
            </Box>
        </Flex>
    </div >
);

export default Prizes;