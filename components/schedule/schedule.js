import Title from '../title/title.js';
import { schedule } from "./schedule.json";
import { Box, Flex } from 'rebass';
import './schedule.css';

const Schedule = () => (
    <div className='schedule-page'>
        <Title title="Datathon Schedule" width={[0.7, 0.4]} />
        {/*<h3>Tracks will be released soon!</h3>*/}
        <div className='schedule-items'>
        <h3>The tentative schedule for the Datathon can be seen below! This schedule is subject to change.</h3>
            {<Flex className='schedule-events' flexDirection='row' flexWrap='wrap' justifyContent='center' width={[1, 0.8]} ml='auto' mr='auto'>
                {
                    schedule.map(day => (
                        <Box width={[1, 0.5]} key={day.day}>
                            <h2>{day.day}</h2>
                            {
                                day.events.map(event =>
                                    {
                                        if (event.link.length === 0) {
                                            return <p key={event.name}><strong>{event.time}</strong> : {event.name} </p>;
                                        } else {
                                            return <p key={event.name}><strong>{event.time}</strong> : <a href={event.link} target="_blank"> {event.name} </a></p>;
                                        }
                                    }

                                )
                            }
                        </Box>
                    ))
                }
            </Flex>}

            {/*<h1 style={{ fontWeight: 'normal' }}><img src='https://icon.now.sh/pin/A7BBCE/50' alt='' />The Datathon will be held in <a href="https://goo.gl/maps/m3tKWrdj84y5RpY6A" target="_blank" rel="noopener noreferrer">Duncan Hall</a> on the Rice Campus</h1>*/}
            {/*<h1 style={{ fontWeight: 'normal' }}><img src='https://icon.now.sh/pin/A7BBCE/50' alt='' />The Datathon will be virtual.</h1>*/}
        </div>
    </div>
)

export default Schedule;