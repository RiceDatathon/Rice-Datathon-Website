import { Box } from 'rebass';
import Title from '../title/title';
import './tracks.css';

import TrackList from './trackList';

const Tracks = () => (
    <div className='tracks'>
        <Title title="Tracks" width={[0.7, 0.3]} />
        <Box className='track-list' width={[0.9, 0.5]} ml='auto' mr='auto'>
            <h2>Rules</h2>
            <p>You may not submit a project that was not started and completed during the duration of the datathon. Checkout the provided datasets listed below as a starting point for your project, or feel free to choose a different dataset, just provide the source of the data along with your submission. Use of kaggle datasets is discouraged.</p>
            <h3>We have 5 Tracks at the Datathon this year!</h3>
            <ol style={{ textAlign: 'left', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                <li>Chevron Challenge</li>
                <li>Predicting the Severity of Forest Fires Applied Machine Learning for Social Good Sponsored by Accenture</li>
                <li>Machine Learning Systems Track</li>
                <li>Houston/Texas Trends Track</li>
                <li>Various Other Provided Datasets</li>
            </ol>
            {
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