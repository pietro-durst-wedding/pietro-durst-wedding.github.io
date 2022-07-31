import * as React from 'react';
import Box from '@mui/material/Box';
import PicByText from './PicByText';

export default function ThingsTo(props) {
  return (
    <Box
      className='center-info-container-things-to-do'
    >
        {props.things.map((item, i) => (
           <PicByText title={item.thing} image={item.image} isLeft={i % 2}></PicByText>
        ))}
    </Box>
  );
}
