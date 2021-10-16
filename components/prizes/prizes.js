import { Box, Flex } from 'rebass';
import Title from '../title/title.js';
import '../title/title.css';
import './prizes.css';

const Prizes = () => (
    <div className="prizes">
        <Title title="Prizes" width={[0.5, 0.2]} />
        <h3 className="prize-list">More information about prizes will be released later!</h3>
    </div >
);

export default Prizes;