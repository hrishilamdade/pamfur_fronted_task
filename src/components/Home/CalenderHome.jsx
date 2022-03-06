import { Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react'
import "./CalenderHome.css"
import bg from '../../assets/images/bg.png'
import { Link } from 'react-router-dom';

function CalenderHome() {
    console.log("Calder Home")
  return (
    <div className='calender_home'>
        <Typography variant='h4' className='calender_home__header'><span className='calender_home__header__first' >Calender</span> 2021</Typography>
        <div className='calender_home__content'>
            <img src={bg} />
        </div>
        <div className='calender_home__footer'>
            <div className='calender_home__footer__main'>
                <h3 className='calender_home__footer__head'>Hi Aman,</h3>
                <p className='calender_home__footer__content'> Welcome to your daily event calendar. Be more engaging 
                    & personalised than ever before. We'll help you in Tracking Upcoming Events, Scheduling Meetings & Creating 
                    New Event!
                </p>
                <div className='calender_home__footer__button__container'>
                    <Link to={'/calender'}>
                        <div className='calender_home__footer__button'>
                            <ArrowForwardIcon className='calender_home__footer__button__icon'/>
                        </div>
                    </Link>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default CalenderHome