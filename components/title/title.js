import { Box } from 'rebass';
import './title.css';

const Title = props => (
    <Box className='title' width={props.width} ml='auto' mr='auto'>
        <div className={props.theme ? ('title-style1') : ('title-style2')}>
            {props.title}
        </div>
    </Box>
)

export default Title;