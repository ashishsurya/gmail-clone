import { Checkbox, IconButton } from '@material-ui/core';
import { Group, Inbox, LocalOffer } from '@material-ui/icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ChevronLeftSharpIcon from '@material-ui/icons/ChevronLeftSharp';
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RefreshIcon from '@material-ui/icons/Refresh';
import React, { useEffect, useState } from 'react';
import './EmailList.css';
import EmailRow from './EmailRow';
import { db } from './firebase';
import Section from './Section';

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection('emails')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className='emaillist'>
      <div className='emaillist__settings'>
        <div className='email__settingsLeft'>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='email__settingsRight'>
          <IconButton>
            <ChevronLeftSharpIcon />
          </IconButton>
          <IconButton>
            <ChevronRightSharpIcon />
          </IconButton>
        </div>
      </div>
      <div className='emaillist__sections'>
        <Section Icon={Inbox} title='Primary' color='red' selected />
        <Section Icon={Group} title='Social' color='#1A73E8' />
        <Section Icon={LocalOffer} title='Promotions' color='green' />
      </div>
      <div className='emaillist__list'>
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            key={id}
            id={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          title='Twitch'
          subject='Hey fellow Streamer'
          description='This is a test'
          time='10pm'
        />
        <EmailRow
          title='Twitch'
          subject='Hey fellow Streamer'
          description='This is a test'
          time='10pm'
        />
        <EmailRow
          title='Twitch'
          subject='Hey fellow Streamer'
          description='This is a test'
          time='10pm'
        />
        <EmailRow
          title='Twitch'
          subject='Hey fellow Streamer'
          description='This is a test'
          time='10pm'
        />
        <EmailRow
          title='Twitch'
          subject='Hey fellow Streamer'
          description='This is a test'
          time='10pm'
        />
        <EmailRow
          title='Twitch'
          subject='Hey fellow Streamer'
          description='This is a test'
          time='10pm'
        />
        <EmailRow
          title='Twitch'
          subject='Hey fellow Streamer'
          description='This is a test'
          time='10pm'
        />
        <EmailRow
          title='Twitch'
          subject='Hey fellow Streamer'
          description='This is a test'
          time='10pm'
        />
        <EmailRow
          title='Twitch'
          subject='Hey fellow Streamer'
          description='This is a test'
          time='10pm'
        />
        <EmailRow
          title='Twitch'
          subject='Hey fellow Streamer'
          description='This is a test'
          time='10pm'
        />
        <EmailRow
          title='Twitch'
          subject='Hey fellow Streamer'
          description='This is a test'
          time='10pm'
        />
        <EmailRow
          title='Twitch'
          subject='Hey fellow Streamer'
          description='This is a test'
          time='10pm'
        />
        <EmailRow
          title='Twitch'
          subject='Hey fellow Streamer'
          description='This is a test'
          time='10pm'
        />
        <EmailRow
          title='Twitch'
          subject='Hey fellow Streamer'
          description='This is a test'
          time='10pm'
        />
        <EmailRow
          title='Twitch'
          subject='Hey fellow Streamer'
          description='This is a test'
          time='10pm'
        />
        <EmailRow
          title='Twitch'
          subject='Hey fellow Streamer'
          description='This is a test'
          time='10pm'
        />
      </div>
    </div>
  );
};

export default EmailList;
