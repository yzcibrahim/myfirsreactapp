import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyComp from './components/MyComp';
import Toplama from './components/Toplama';

class App extends React.Component {
  render()
  {
    return (<div className='App'>
      {/* <MyComp /> */}
     <Toplama/>
    </div>)
  } 
}

export default App;

