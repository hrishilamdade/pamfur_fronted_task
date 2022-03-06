import React from 'react'
import { Typography } from '@mui/material';
import './Calender.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@mui/material/Avatar';
import Calendar from 'react-calendar';
import CalenderMonth from './CalenderMonth';
import Events from './../Events/Events';

function CalenderComponent() {
  return (
    <div>
        <div className='calender__header'>
            <div className='calender__header__head'>
                <ArrowBackIosIcon/>
                <Typography variant='h6'> 2021</Typography>
                <div className='calender__header__head__month'>February <KeyboardArrowDownIcon/> </div>
        
            </div>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        </div>
        <CalenderMonth/>
        <Events/>
    </div>
  )
}

export default CalenderComponent