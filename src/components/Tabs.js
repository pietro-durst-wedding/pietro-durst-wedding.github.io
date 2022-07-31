import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

export default function BasicTabs(props) {
  return (
    <AppBar position="static" color="default" className='top-tabs-container'>
      <Box display="flex" justifyContent="center" width="100%" className='top-tabs top'>
        <Tabs
          TabIndicatorProps={{
            style: {
              background: "#BF9270",
              backgroundColor: "#BF9270",
              color: "#BF9270",
              textColor: "#BF9270"
            }
            }}
          className="top-tabs"
          value={props.tabValue}
          onChange={props.handleTabChange}
          aria-label="secondary tabs example"
          variant="scrollable"
          scrollButtons="auto"
          centered

        >
          <Tab className="tabs" value="home" label="Home" />
          <Tab className="tabs" value="info" label="Info" />
          <Tab className="tabs" value="stay" label="To Stay" />
          <Tab className="tabs" value="do" label="To Do" />
          <Tab className="tabs" value="registry" label="Registry" />
          <Tab className="tabs" value="rsvp" label="RSVP" />
          <Tab className="tabs" value="qanda" label="Q&A" />
          <Tab className="tabs" value="lovestory" label="Love Story" />
          <Tab className="tabs" value="weddingparty" label="Wedding Party" />
        </Tabs>
      </Box>
    
    </AppBar>
  );
}

// Tabs
// Home
// Wedding Information
// Places to Stay
// Things to Do (in Miami)
// Registry