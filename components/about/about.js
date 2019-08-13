import Title from '../title/title.js';
import { Image, Box, Flex } from 'rebass';
import './about.css';

const About = () => (
    <div className='about-page'>
        <Title title="About Rice Datathon" width={[0.7, 0.5]} />
        <Box className='about-content' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto'>
            <Flex flexDirection='row' flexWrap='wrap' justifyContent='center'>
                <Box width={350} className='about-content-card'>
                    <p className='about-content-text'>
                        The Rice Datathon is an annual data science competition that is hosted by the Rice DataScience Club and the Rice Data to Knowledge Lab.
                    </p>
                    <p className='about-content-text'>
                        Students have 24 hours to work in teams, or individually, to design and implement data science related projects and win great prizes.
                    </p>
                </Box>
                <Box width={350} className='about-image-card'>
                    <Image src='../../static/network.svg' />
                </Box>
                <Box width={350} className='about-image-card'>
                    <Image src='../../static/graph.svg' />
                </Box>
                <Box width={350} className='about-content-card'>
                    <p className='about-content-text'>
                        The Rice Datathon is a great opportunity to learn more about data science, enjoy free food and snacks, win fantastic prizes, and impress recruiters!
                    </p>
                </Box>
            </Flex>
        </Box>
    </div>
)

export default About;