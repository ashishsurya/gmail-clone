import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import './SendMail.css';
import firebase from 'firebase';

const SendMail = () => {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (formData) => {
    console.log(formData);
    db.collection('emails').add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className='sendmail'>
      <div className='sendmail__header'>
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className='sendmail__close'
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name='to'
          placeholder='To'
          type='email'
          autoComplete='off'
          {...register('to', { required: 'Required' })}
        />

        <input
          name='subject'
          type='text'
          autoComplete='off'
          placeholder='Subject'
          {...register('subject', { required: 'Required' })}
        />
        <input
          name='message'
          type='text'
          autoComplete='off'
          placeholder='Message...'
          className='sendmail__message'
          {...register('message', { required: 'Required' })}
        />

        <div className='sendmail__options'>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            className='sendmail__send'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
