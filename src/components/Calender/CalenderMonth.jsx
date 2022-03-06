import { Grid } from '@mui/material';
import React, { useState } from 'react'

function CalenderMonth() {
    const [dates, setDates] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27,28]);
  return (
    <div className='calender_month'>
        <Grid container>
            {
                dates.map(date=><Grid key={date} item className='calender_month__date' alignItems={'center'} justifyContent={'center'} xs={2}><span className='calender_month__date__main'>{date}</span></Grid>)
            }
        </Grid>
    </div>
  )
}

export default CalenderMonth