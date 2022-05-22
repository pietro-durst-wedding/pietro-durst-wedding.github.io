import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Photo() {
  return (
    <Box
      className='center-img-container'
    >
      <Paper
       component="img"
       display= "inline-block"
       style={{display: 'inline-block'}}
       className='center-img'
       elevation={3} 
       src={require('../images/1.jpg')}
      />
    </Box>
  );
}
