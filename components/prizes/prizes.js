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
                <h1 style={{ fontWeight: 'normal' }}>$500</h1>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>2nd Place</h1>
                <h1 style={{ fontWeight: 'normal' }}>$300</h1>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>3rd Place</h1>
                <h1 style={{ fontWeight: 'normal' }}>$200</h1>
            </Box>
            <Box width={220}>
                <h1 style={{ fontWeight: 'normal' }}>Honorable Mentions</h1>
                <h1 style={{ fontWeight: 'normal' }}>$50</h1>
            </Box>
        </Flex>
        <Flex flexDirection='row' flexWrap='wrap' justifyContent='center' className='prize-list'>
            <Box width={345}>
                <h1 style={{ fontWeight: 'normal' }}>Best Visualizations</h1>
                <h1 style={{ fontWeight: 'normal' }}>$100</h1>
            </Box>
            <Box width={300}>
                <h1 style={{ fontWeight: 'normal' }}>Best Social Impact Project</h1>
                <h1 style={{ fontWeight: 'normal' }}>$100</h1>
            </Box>
            <Box width={380}>
                <h1 style={{ fontWeight: 'normal' }}>Best Houston/Texas-focused Project</h1>
                <h1 style={{ fontWeight: 'normal' }}>$100</h1>
            </Box>
        </Flex>
        <Flex flexDirection='row' flexWrap='wrap' justifyContent='center' className='prize-list'>
            <Box width={370}>
                <h1 style={{ fontWeight: 'normal' }}>1st Underclassmen Team/Beginner's Challenge Winner</h1>
                <h1 style={{ fontWeight: 'normal' }}>$100</h1>
            </Box>
            <Box width={370}>
                <h1 style={{ fontWeight: 'normal' }}>2nd Underclassmen Team/Beginner's Challenge Winner</h1>
                <h1 style={{ fontWeight: 'normal' }}>$75</h1>
            </Box>
            <Box width={370}>
                <h1 style={{ fontWeight: 'normal' }}>3rd Underclassmen Team/Beginner's Challenge Winner</h1>
                <h1 style={{ fontWeight: 'normal' }}>$50</h1>
            </Box>
        </Flex>
        <Flex flexDirection='row' flexWrap='wrap' justifyContent='center' className='prize-list'>
            <Box width={345}>
                <h1 style={{ fontWeight: 'normal' }}>Best PVAMU Team</h1>
                <h1 style={{ fontWeight: 'normal' }}>$125</h1>
            </Box>
            <Box width={300}>
                <h1 style={{ fontWeight: 'normal' }}>Best TSU Team</h1>
                <h1 style={{ fontWeight: 'normal' }}>$125</h1>
            </Box>
        </Flex>
        <Flex flexDirection='row' flexWrap='wrap' justifyContent='center' className='prize-list'>
            <Box width={370}>
                <h1 style={{ fontWeight: 'normal' }}>Bill.com Challenge Winner</h1>
                <h1 style={{ fontWeight: 'normal' }}>8th-generation iPad</h1>
            </Box>
            <Box width={370}>
                <h1 style={{ fontWeight: 'normal' }}>Bill.com Challenge 2nd Place Winner</h1>
                <h1 style={{ fontWeight: 'normal' }}>$50 Amazon Gift Card</h1>
            </Box>
            <Box width={370}>
                <h1 style={{ fontWeight: 'normal' }}>Bill.com Challenge 3rd Place Winner</h1>
                <h1 style={{ fontWeight: 'normal' }}>Bill.com tumblers</h1>
            </Box>
        </Flex>
        <Flex flexDirection='row' flexWrap='wrap' justifyContent='center' className='prize-list'>
            <Box width={370}>
                <h1 style={{ fontWeight: 'normal' }}>Goldman Sachs Challenge Winner</h1>
                <h1 style={{ fontWeight: 'normal' }}>Apple Watch Series 7</h1>
            </Box>
            <Box width={370}>
                <h1 style={{ fontWeight: 'normal' }}>Chevron Challenge Winner</h1>
                <h1 style={{ fontWeight: 'normal' }}>Apple Watch Series 3</h1>
            </Box>
            <Box width={370}>
                <h1 style={{ fontWeight: 'normal' }}>Chevron Challenge 2nd Place Winner</h1>
                <h1 style={{ fontWeight: 'normal' }}>$100 Amazon Gift Card</h1>
            </Box>
        </Flex>
        <Flex flexDirection='row' flexWrap='wrap' justifyContent='center' className='prize-list'>
            <Box width={370}>
                <h1 style={{ fontWeight: 'normal' }}>BakerRipley Challenge Winner</h1>
                <h1 style={{ fontWeight: 'normal' }}>3rd-generation AirPods</h1>
            </Box>
            <Box width={370}>
                <h1 style={{ fontWeight: 'normal' }}>Cognite Challenge Winner</h1>
                <h1 style={{ fontWeight: 'normal' }}>$100 Amazon Gift Card</h1>
            </Box>
        </Flex>
        <Flex flexDirection='row' flexWrap='wrap' justifyContent='center' className='prize-list'>
            <Box width={850}>
                <h1 style={{ fontWeight: 'normal' }}>Raffles</h1>
                <h1 style={{ fontWeight: 'normal' }}>Roku Stick, Bose Earbuds, Nintendo Switch, 
                4th-gen iPad Pro, and 2021 14" M1 Pro Macbook Pro!</h1>
            </Box>
        </Flex>
        <h1>All prizes (except raffles) are per person on a team!</h1>
        <h1>Raffles will be considered on an individual basis only.</h1>
    </div >
);

export default Prizes;