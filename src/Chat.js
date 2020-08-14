import React, { useEffect, useState } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from './firebase';
import Message from './Message';

function Chat() {
  // naming a hook
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  // Go into database and return rooms with a new snapshot
  useEffect(() => {
    // if roomId is true return the database
    if(roomId) {
      db.collection('rooms')
      .doc(roomId) 
      // on new snapshot save the room name into setRoomDetails == roomDetails
      // which saves the same name into roomDetails
      .onSnapshot(snapshot => ( setRoomDetails(snapshot.data())
      ));
    }
    

    // Go into database and return the messages for and order by timestap
    db.collection('rooms').doc(roomId)
    .collection('messages')
    .orderBy('timestamp', 'asc')
    // on snapshot loop through the messages and save into setRommMessages == roomMessages
    .onSnapshot(snapshot => ( setRoomMessages(snapshot.docs.map((doc) => doc.data())
    )));

  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_headerLeft">
          <h4 className="chat_channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>

        <div className="chat_headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat_messages">
        {roomMessages.map(({message, timestamp, user, userImage}) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
    </div>
  );
}

export default Chat;