import React from 'react'
import  Avatar  from '@mui/material/Avatar';
import { AvatarGroup } from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import VideocamIcon from '@mui/icons-material/Videocam';

function SingleEvent() {
  return (
    <div className='single_event'>
        <div style={{'width':'100px'}}>
            <div ><b>11:00 am</b></div> <span style={{'color':'GrayText'}}>(45 mins)</span>
        </div>
        <div className='single_event__main'>
            <div style={{'display':'flex','justifyContent':'space-between','alignItems':'center'}} className='bold font-lg'>
                <div>
                    Design Scrum
                </div>
                <CachedIcon/>
            </div>
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
                <div style={{display:'flex',color:'white',alignItems:'center'}}> <span style={{display:'flex',alignItems:'center',padding:'3px',borderRadius:'50px',backgroundColor:'#6faeeb'}}><VideocamIcon/></span> <span style={{'color':'GrayText',marginLeft:'4px'}}>456 676 7889</span></div>
            </div>
        </div>
    </div>
  )
}

export default SingleEvent