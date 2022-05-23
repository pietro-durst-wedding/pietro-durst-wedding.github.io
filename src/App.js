import * as React from 'react';
import './App.css';
import BasicTabs from './components/Tabs'
import BasicRouter from './components/Router'
import Countdown from 'react-countdown';

function App() {
  const [tabValue, setTabValue] = React.useState('home');

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const renderer = ({ days, hours, minutes }) => (
    days + " days and " + hours + " hours until the wedding!"
  );

  return (
    <div className="App">
      <div className='top'>
        <BasicTabs
          handleTabChange={handleTabChange}
          tabValue={tabValue}
        ></BasicTabs>
      </div>
      <div className='center'>
        {/* <div className='left-middle'></div> */}
        {/* <div className='center-middle'> */}
          <BasicRouter
            tabValue={tabValue}
          >
          </BasicRouter>
        {/* </div> */}
        {/* <div className='right-middle'></div> */}
      </div>
      <div className='bottom'>
      <Countdown
        date={new Date('April 29, 2023 12:00:00')}
        intervalDelay={0}
        precision={0}
        renderer={props => <div>{renderer(props)}</div>}
      />
      </div>
    </div>
  );
}

export default App;
