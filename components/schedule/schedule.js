import Title from '../title/title.js';
import './schedule.css';

const Schedule = () => (
    <div className='schedule-page'>
        <Title title="Datathon Schedule" width={[0.7, 0.4]} theme={false} />
        <div className='schedule-items'>
            <h1 style={{fontWeight: 'normal'}}><img src='https://icon.now.sh/event/A7BBCE/50' alt=''/>Mark your calendars, the Rice Datathon will take place January 24-25, 2020</h1>
            <h1 style={{fontWeight: 'normal'}}><img src='https://icon.now.sh/pin/A7BBCE/50' alt=''/>The Datathon will be held in <a href="https://goo.gl/maps/m3tKWrdj84y5RpY6A" target="_blank" rel="noopener noreferrer">Duncan Hall</a> on the Rice Campus</h1>
        </div>
    </div>
)

export default Schedule;