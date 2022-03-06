import React from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

function UpcomingSingleEvent() {
  return (
    <div className='upcoming_single_event'>
        <div className='bold font-lg'>Design Scrum</div>
        <div style ={{display:'flex','flexDirection':'row','padding':'20px'}} >
          <AvatarGroup spacing={'small'}	sx={{ width: 36, height: 36 }} max={4}>
            <Avatar sx={{ width: 36, height: 36 }} alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            <Avatar sx={{ width: 36, height: 36 }} alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
            <Avatar sx={{ width: 36, height: 36 }} alt="Cindy Baker" src="https://mui.com/static/images/avatar/4.jpg" />
            <Avatar sx={{ width: 36, height: 36 }} alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar sx={{ width: 36, height: 36 }} alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
        </div>
        <div>
            <div variant='h6'>11:00 am <span style={{'color':'GrayText'}}>(45 mins)</span></div>
        </div>

    </div>
  )
}

export default UpcomingSingleEvent