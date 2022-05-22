import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function WeddingInfo(props) {
  return (
    <Box
      className='center-info-container'
    >
      <Paper
       display= "inline-block"
       style={{display: 'inline-block'}}
       className='wedding-info'
       elevation={5} 
      >
        <div className='wedding-info-container'>
          <h1>Info</h1>
          <div className='wedding-info-text-container'>
            <div><strong>Date:</strong> April 29, 2023</div><br/>
            <div><strong>Location:</strong> Miami, Florida</div><br/>
            <div><strong>Venue:</strong> Miami, Florida</div><br/>
            <div><strong>Time:</strong> 5:00PM - 12:00AM </div><br/>
            <div><strong>Dress code:</strong> nude pallete</div><br/>
            <div><strong>Contact:</strong> info@pietri-durst.wedding</div><br/>
            <br/>
          </div>
        </div>
      </Paper>
    </Box>
  );
}
