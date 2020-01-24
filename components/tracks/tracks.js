import { Box } from 'rebass';
import Title from '../title/title';
import './tracks.css';

const Tracks = () => (
    <div className='tracks'>
        <Title title="Tracks" width={[0.7, 0.3]} />
        <Box className='track-list' width={[0.9, 0.5]} ml='auto' mr='auto'>
            <h2>Rules</h2>
            <p>You may not submit a project that was not started and completed during the duration of the datathon. Checkout the provided datasets listed below as a starting point for your project, or feel free to choose a different dataset, just provide the source of the data along with your submission. Use of kaggle datasets is discouraged.</p>
            <h2>College/University Survey Data</h2>
            <a href="https://nces.ed.gov/ipeds/datacenter/DataFiles.aspx">Get the Dataset Here</a>
            <p>
                The datasets available from this search tool offer a wide variety of data ranging from institutional characteristics of colleges, to their test scores and graduation rates. Choose the year and type of data you are looking for and press 'continue'. The column labeled data file has a download link for the dataset. The rightmost column labeled dictionary lets you download a spreadsheet containing a breakdown of what the features/labels in the dataset represent.
            </p>
            <h2>2018 World Cup Match Data</h2>
            <a href="https://github.com/fivethirtyeight/data/tree/master/world-cup-2018">Get the Dataset Here</a>
            <p>
                The leftmost link contains match data from the 2018 world cup courtesy of fivethirtyeight. The right link contains their tournament predictions do not copy this as your own result, find a new way to analyze the data.
            </p>
            <h2>Divorce Prediction Dataset</h2>
            <a href="https://archive.ics.uci.edu/ml/datasets/Divorce+Predictors+data+set">Get the Dataset Here</a>
            <p>
                Each row in this dataset represents an individuals responses to a survey containing 54 questions about various aspects of their marriage. The vectors are labeled based on whether or not the relationship ended in divorce. Have fun!
            </p>
            <h2>UK Online Retail Invoices</h2>
            <a href="https://archive.ics.uci.edu/ml/datasets/Online+Retail+II">Get the Dataset Here</a>
            <p>
                This dataset contains the data from about 1,000,000 invoices from a UK online retail store between 2009 and 2011. The link 'data folder' at the top contains a download link for the dataset.
            </p>
        </Box>

    </div >
);

export default Tracks;