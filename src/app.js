import React from 'react';
import { render } from 'react-dom';
import Threeup from './Threeup';
import Menu from './Menu';
import VideoThumb from './VideoThumb';

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Threeup />
        <VideoThumb />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
