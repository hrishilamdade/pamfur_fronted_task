import React from 'react'
import './Events.css'
import UpcomingEvents from './UpcomingEvents';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CreateNewEvent from './CreateNewEvent';

function Events() {

    const [showCreateNewEvent, setShowCreateNewEvent] = React.useState(false);
    const handleShowAllEvents = ()=>{
        document.getElementById('upcoming_events__allevents').classList.toggle('upcoming_events__allevents__hide');
    }

    const handleShowCreateNewEvent = ()=>{
        setShowCreateNewEvent(!showCreateNewEvent);
        document.getElementById('create_new_event').classList.toggle('create_new_event__active');
    }

    return (
        <div className='events'>
            <div className='events__main'>
                {/* <Box width={'20px'} component={HorizontalRuleIcon}/>
                */}
                <div onClick={handleShowAllEvents} className='events__main__horizontal_line'><div></div></div>
                <UpcomingEvents/>
                <div onClick={handleShowCreateNewEvent} className='events__add_new_event'>
                    <AddIcon/>
                </div>
            </div>
            {
                showCreateNewEvent?<CreateNewEvent setShowCreateNewEvent={setShowCreateNewEvent}/>:null
            }
        </div>
    )
}

export default Events