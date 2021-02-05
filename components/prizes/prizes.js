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
                <p>$400</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>2nd Place</h1>
                <p>$200</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>3rd Place</h1>
                <p>$100</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>Best Underclass-men Team</h1>
                <p>$100</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>Best Visualization</h1>
                <p>$75</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>Best Social Impact</h1>
                <p>$75</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>Houston/ COVID Track</h1>
                <p>$75</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>Bill.com </h1>
                <p>32GB iPad</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>Chevron 1st Place</h1>
                <p>Airpods Pro</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>Chevron 2nd Place</h1>
                <p>$100 Amazon gift card</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>Quantlab</h1>
                <p>0.005 Bitcoin</p>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>2nd.MD</h1>
                <p>Apple Watch SE</p>
            </Box>
            <p>All prizes are per person</p>
        </Flex>
    </div >
);

export default Prizes;