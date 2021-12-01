import React from 'react';
import Mainform from './components/MainForm/Mainform';
import Countries from './components/Countries/Countries';
import Splash from './components/LoadingScreen/Splash';
import Confirmation from './components/FinalPage/Confirmation';
import './App.css';

function App() {
  return (
    <div className="App">
    {/* <Countries/> */}
     <Mainform/>
     {/* <Splash/> */}
     {/* <Confirmation/> */}
    </div>
  );
}

export default App;
