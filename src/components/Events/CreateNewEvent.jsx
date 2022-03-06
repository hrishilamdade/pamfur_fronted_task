import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Switch } from '@mui/material';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';

function CreateNewEvent({setShowCreateNewEvent}) {
  return (
    <div id="create_new_event" className='create_new_event'>
        <div style={{'display':'flex','alignItems':'center','borderBottom':'0.5px solid rgb(164 164 164)','padding': '12px 20px'}}>
            <IconButton onClick={()=>setShowCreateNewEvent(false)}>
                <CloseIcon/>
            </IconButton>
            <span style={{'marginLeft':'12px','fontSize':'18px'}} className="bold">New Event</span>
        </div>
        <div className='create_new_event__main'>
            <div className='create_new_event__input__container'>
                <input className='create_new_event__input__name' placeholder='Add Title'/>
            </div>
            <div className='create_new_event__invite'>
                <div style={{'display':'flex','alignItems':'center'}}>
                    <GroupsOutlinedIcon/>
                    <span style={{'marginLeft':'10px'}} className="bold">Invite People</span>
                    
                </div>
                <ArrowForwardIosIcon/>
            </div>
            <div className='create_new_event__time'>
                <div style={{'display':'flex',justifyContent:'space-between'}}>
                    <div style={{display:'flex'}}>
                        <AccessTimeIcon/>
                        <span style={{marginLeft:'10px'}} className="bold">
                            All Day
                        </span>
                    </div>
                    <Switch
                        color="primary"
                        value="dynamic-class-name"
                    />
                </div>
                <div style={{marginLeft:'30px'}}>
                    <div style={{display:'flex',justifyContent:'space-between',padding:'4px 0px'}}>
                        <div>Thursday, 21 September</div>
                        <div>02:30pm</div>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <div>Thursday, 21 September</div>
                        <div>03:30pm</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="create_new_event__main__info">
                    <div style={{display:'flex'}}>
                        <LocationOnOutlinedIcon/>
                        <span style={{marginLeft:'10px'}} className='bold'>Location</span>
                    </div>
                    <div>
                        <ArrowForwardIosIcon/>
                    </div>
                </div>
                <div className="create_new_event__main__info">
                    <div style={{display:'flex'}}>
                        <PendingActionsIcon/>
                        <span style={{marginLeft:'10px'}} className='bold'>Agenda</span>
                    </div>
                    <div>
                        <ArrowForwardIosIcon/>
                    </div>
                </div>
                <div className="create_new_event__main__info">
                    <div style={{display:'flex'}}>
                        <AttachFileOutlinedIcon/>
                        <span style={{marginLeft:'10px'}} className='bold'>Add Attachment</span>
                    </div>
                    <div>
                        <ArrowForwardIosIcon/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateNewEvent