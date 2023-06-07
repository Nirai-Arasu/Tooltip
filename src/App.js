import './App.css';
import { useState } from 'react';

import Navbar from './components/Navbar/Navbar';

function App() {
  const [toolTip, setToolTip] = useState({
    menu_one: false,
    menu_two: false,
    menu_three: false,
    menu_four: false,
  });
  const removeHover = (event) => {
    console.log(event.target.id);
    setToolTip({ ...toolTip, [event.target.id]: false });
  };
  const addHover = (event) => {
    console.log(event.target.id);
    setToolTip({ ...toolTip, [event.target.id]: true });
  };
  return (
    <div className="App">
      <Navbar toolTip={toolTip} removeHover={removeHover} addHover={addHover} />
    </div>
  );
}

export default App;
