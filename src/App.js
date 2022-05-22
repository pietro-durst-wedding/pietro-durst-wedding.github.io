import * as React from 'react';
import './App.css';
import BasicTabs from './components/Tabs'
import BasicRouter from './components/Router'

function App() {
  const [tabValue, setTabValue] = React.useState('home');

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <div className="App">
      <div className='top'>
        <BasicTabs
          handleTabChange={handleTabChange}
          tabValue={tabValue}
        ></BasicTabs>
      </div>
      <div className='center'>
        <div className='left-middle'></div>
        <div className='center-middle'>
          <BasicRouter
            tabValue={tabValue}
          >
          </BasicRouter>
        </div>
        <div className='right-middle'></div>
      </div>
      <div className='bottom'></div>
    </div>
  );
}

export default App;
