import * as React from 'react';
import ThingsTo from './ThingsTo';

export default function ThingsToDo(props) {
  return (
    <ThingsTo
      things={
        [
          {
            "thing": "dance",
            "image": "image"
          },
          {
            "thing": "sing",
            "image": "image"
          },
          {
            "thing": "eat",
            "image": "image"
          }
        ]
      }
    />
  );
}
