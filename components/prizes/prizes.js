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
        </Flex>
    </div >
);

export default Prizes;