import { Box } from 'rebass';
import './title.css';

const Title = props => (
    <Box className='title' width={props.width} ml='auto' mr='auto'>
        <div className='title-style'>
            {props.title}
        </div>
    </Box>
)

export default Title;