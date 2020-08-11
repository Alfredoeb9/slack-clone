import React from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import SidebarOption from './SidebarOption';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Clever Programmer</h2>
          <h3>
            <FiberManualRecordIcon />
            Alfredo Barillas
          </h3>
        </div>
        <CreateIcon />

      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption title="Youtube" />
    </div>
  );
}

export default Sidebar;