import { Box } from 'rebass';
import Title from '../title/title';
import './tracks.css';

import TrackList from './trackList';

const Tracks = () => (
    <div className='tracks'>
        <Title title="Tracks" width={[0.7, 0.3]} />
        <Box className='track-list' width={[0.9, 0.5]} ml='auto' mr='auto'>
            {/* <h2>Rules</h2>.
            <p>You may not submit a project that was not started and completed during the duration of the Datathon. Check out the provided datasets below as a starting point for your project, or feel free to choose a different dataset (just provide the source of the data along with your submission). Use of kaggle datasets is prohibited.</p>
            <h3>We have 5 Tracks at the Datathon this year!</h3> */}
            <h3>More detailed information about tracks and challenges will be released on Friday!</h3>
            {/* <ol style={{ textAlign: 'left', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                <li>Bill.com Challenge</li>
                <li>Chevron Challenge</li>
                <li>Quantlab Challenge</li>
                <li>2nd.MD Challenge</li>
                <li>Houston/Texas Trends Track</li>
                <li>Various Other Provided Datasets</li>
            </ol>
        */} {
                TrackList.map(track => (
                    <Box className='main-track' mt={40}>
                        {track}
                    </Box>
                ))
                } 
        </Box>

    </div >
);

export default Tracks;