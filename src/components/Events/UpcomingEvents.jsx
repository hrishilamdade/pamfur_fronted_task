import { Typography } from '@mui/material';
import React from 'react'
import UpcomingSingleEvent from './UpcomingSingleEvent';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import SingleEvent from './SingleEvent';

function UpcomingEvents() {
  return (
    <div>
        <Typography variant='h7'>Upcoming Events (3) </Typography>
        <div className='upcoming_events__main'>
            <UpcomingSingleEvent/>
            <UpcomingSingleEvent/>
            <UpcomingSingleEvent/>
        </div>
        <div id='upcoming_events__allevents' className='upcoming_events__allevents upcoming_events__allevents__hide'>
            <div className='upcoming_events__allevents__head'>
                <div style={{'display':'flex','justifyContent':'center','alignItems':'center'}}>
                    <span variant='h6'><b>Today, </b></span><span style={{'marginLeft':'3px'}}> Monday</span>
                </div>
                <div style={{'display':'flex','justifyContent':'center','alignItems':'center'}}>
                    <NightsStayIcon color='primary'/>   
                    <span>31°/ 25°</span>
                </div>
            </div>
            <div className='upcoming_events__allevents__body'>
                <SingleEvent/>
                <SingleEvent/>
                <SingleEvent/>
            </div>
        </div>
        
        
    </div>
  )
}

export default UpcomingEvents