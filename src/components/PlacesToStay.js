import * as React from 'react';
import ThingsTo from './ThingsTo';

export default function ThingsToDo(props) {
  return (
    <ThingsTo
      things={
        [
          {
            "thing": "hotel 1",
            "image": "image"
          },
          {
            "thing": "hotel 2",
            "image": "image"
          },
          {
            "thing": "hotel 3",
            "image": "image"
          }
        ]
      }
    />
  );
}
