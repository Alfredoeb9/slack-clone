import React from 'react';
import "./SidebarOption.css";
import { useHistory } from 'react-router-dom';
import db from './firebase';

function SidebarOption({ Icon, title, id, addChannelOption }) {
  // if we click backarrow or forward arrow save the history
  const history = useHistory();

  // when you click on the rooms push the room(ID) into the url
  const selectChannel = () => {
    if(id) {
      history.push(`/room/${id}`);
    } else {
      history.push('title');
    }
  };

  const addChannel = () => {
    const channelName = prompt('Please enter the channel name');

    // add channel names to database in firebase
    if(channelName) {
      db.collection('rooms').add({
        name: channelName
      });
    }
  };

  return (
    // if the add channel option is clicked return select menu
    <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
      {/* Only render an Icon if it exists */}
      { Icon && <Icon className="sidebarOption_icon" />}
      {/* If no channel has an icon put hashtag */}
      { Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption_channel">
          <span className="sidebarOption_hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;