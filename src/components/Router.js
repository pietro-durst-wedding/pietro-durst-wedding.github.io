import * as React from 'react';
import Blank from './Blank'
import Photo from './Photo'
import WeddingInfo from './WeddingInfo'

export default function BasicRouter(props) {
  switch (props.tabValue) {
    case 'home': return <Photo></Photo>;
    case 'info': return <WeddingInfo></WeddingInfo>;
    case 'stay': return <Blank title={"Where to Stay"}></Blank>;
    case 'do': return <Blank title={"Things to Do"}></Blank>;
    case 'registry': return <Blank title={"Registry"}></Blank>;
    default: return <Photo></Photo>;
  }
}

// Tabs
// Home
// Wedding Information
// Places to Stay
// Things to Do (in Miami)
// Registry