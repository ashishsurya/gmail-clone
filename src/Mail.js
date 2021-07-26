import { IconButton } from '@material-ui/core';
import React from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import './Mail.css';
import EmailIcon from '@material-ui/icons/Email';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LabelIcon from '@material-ui/icons/Label';
import { useHistory } from 'react-router-dom';
import MoreVert from '@material-ui/icons/MoreVert';
import ChevronLeftSharp from '@material-ui/icons/ChevronLeftSharp';
import ChevronRightSharp from '@material-ui/icons/ChevronRightSharp';
import { LabelImportant } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectMail, selectOpenMail } from './features/mailSlice';

const Mail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const selectedMail = useSelector(selectOpenMail)

  const closeMail = () => {
    dispatch(selectMail(null));
    history.push('/');
  };

  return (
    <div className='mail'>
      <div className='mail__tools'>
        <div className='mail__toolsleft'>
          <IconButton onClick={closeMail}>
            <KeyboardBackspaceIcon />
          </IconButton>
          <IconButton>
            <ReportOutlinedIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <ScheduleIcon />
          </IconButton>
          <IconButton>
            <LabelIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className='mail__toolsright'>
          <IconButton>
            <ChevronLeftSharp />
          </IconButton>
          <IconButton>
            <ChevronRightSharp />
          </IconButton>
        </div>
      </div>
      <div className='mail__body'>
        <div className='mail__bodyheader'>
          <h2>{selectedMail?.subject}</h2>
          <LabelImportant className='mail__important' />
          <p>{selectedMail?.title}</p>
          <p className='mail__bodytime'>{selectedMail?.time}</p>
        </div>
        <div className='mail__message'>
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
