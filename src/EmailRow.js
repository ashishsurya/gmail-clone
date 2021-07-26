import { IconButton, Checkbox } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './EmailRow.css';
import { selectMail } from './features/mailSlice';

const EmailRow = ({ id, title, subject, description, time }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectMail({ id, title, subject, description, time }));

    history.push('/mail');
  };

  return (
    <div onClick={openMail} className='emailrow'>
      <div className='emailrow__options'>
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <>
        <h3 className='emailrow__title'>{title}</h3>
        <div className='emailrow__message'>
          <h4>
            {subject}{' '}
            <span className='emailrow__description'>-{description}</span>
          </h4>
        </div>
        <p className='emailrow__time'>{time}</p>
      </>
    </div>
  );
};

export default EmailRow;
