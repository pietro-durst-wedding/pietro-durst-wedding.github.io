import * as React from 'react';
import Blank from './Blank'
import Photo from './Photo'
import WeddingInfo from './WeddingInfo'
import ThingsToDo from './ThingsToDo'
import PlacesToStay from './PlacesToStay'
import Registry from './Registry'

export default function BasicRouter(props) {
  switch (props.tabValue) {
    case 'home': return <Photo></Photo>;
    case 'info': return <WeddingInfo></WeddingInfo>;
    case 'stay': return <PlacesToStay></PlacesToStay>;
    case 'do': return <ThingsToDo></ThingsToDo>;
    case 'registry': return <Registry></Registry>;
    case 'rsvp': return <Blank title={"Rsvp"}></Blank>;
    case 'qanda': return <Blank title={"Q&A"}></Blank>;
    case 'lovestory': return <Blank title={"Our Love Story"}></Blank>;
    case 'weddingparty': return <Blank title={"Coming Soon ™️"}></Blank>;
    default: return <Photo></Photo>;
  }
}

// Tabs
// Home
// Wedding Information
// Places to Stay
// Things to Do (in Miami)
// Registry