import { Button, IconButton } from '@material-ui/core';
import AccessTimeTwoToneIcon from '@material-ui/icons/AccessTimeTwoTone';
import AddIcon from '@material-ui/icons/Add';
import DuoIcon from '@material-ui/icons/Duo';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/Inbox';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import StarIcon from '@material-ui/icons/Star';
import React from 'react';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';
import './SideBar.css';
import SideBarOption from './SideBarOption';

const SideBar = () => {
  const dispatch = useDispatch();
  return (
    <div className='sidebar'>
      <Button
        onClick={() => dispatch(openSendMessage())}
        className='sidebar__compose'
        startIcon={<AddIcon fontSize='large' />}
      >
        Compose
      </Button>
      <SideBarOption Icon={InboxIcon} title='Inbox' number={54} selected />
      <SideBarOption Icon={StarIcon} title='Starred' number={54} />
      <SideBarOption Icon={AccessTimeTwoToneIcon} title='Snoozed' number={54} />
      <SideBarOption Icon={NearMeIcon} title='Sent' number={54} />
      <SideBarOption Icon={NoteIcon} title='Drafts' number={54} />
      <SideBarOption Icon={ExpandMoreIcon} title='More' />

      <div className='sidebar__footer'>
        <div className='sidebar__footerIcons'>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
