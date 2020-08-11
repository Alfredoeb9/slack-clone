import React from 'react';
import "./SidebarOption.css";

function SidebarOption({ Icon, title }) {
  return (
    <div className="sidebarOption">
      {/* Only render an Icon if it exists */}
      { Icon && <Icon className="sidebarOption_icon" />}
      {/* If no channel has an icon put hashtag */}
      { Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3>
          <span className="sidebarOption_hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;