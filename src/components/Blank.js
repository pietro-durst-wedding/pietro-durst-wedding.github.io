import * as React from 'react';
import Box from '@mui/material/Box';

export default function Blank(props) {
  return (
    <Box
      className='center-img-container'
    >
      <h1>{props.title}</h1>
    </Box>
  );
}
