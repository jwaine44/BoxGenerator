import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import DisplayBox from './components/DisplayBox';


function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (box) => {
    const newBox = [...boxes, box]
    setBoxes(newBox)
  }

  return (
    <div className="App">
      <Form addBox = {addBox}/>
      <DisplayBox boxes = {boxes} />
    </div>
  );
}

export default App;
