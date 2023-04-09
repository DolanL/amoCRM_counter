import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState('')
  const [counter, setCounter] = useState<number>(0)
  const [timerId, setTimerId] = useState<number>(0)
  let seconds = JSON.stringify(counter % 60);
  let minutes = JSON.stringify(Math.floor(counter / 60) % 60);
  let hours = JSON.stringify(Math.floor(counter / 3600));

  seconds = +seconds < 10 ? '0' + Math.floor(counter % 60) : JSON.stringify(Math.floor(counter % 60));
  minutes = +minutes < 10 ? '0' + Math.floor(counter / 60) % 60 : JSON.stringify(Math.floor(counter / 60) % 60);
  hours = +hours < 10 ? '0' + Math.floor(counter / 3600) : JSON.stringify(Math.floor(counter / 3600));


  const onCLickHandler = () => {
    setCounter(+value)
    const idInterval: number = window.setInterval(() => {
      setCounter(counter => counter - 1)
    }, 1000)
    setTimerId(idInterval)
  }

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onCLickHandler()
    }
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }


  if (counter <= 0) {
    clearInterval(timerId)
  }


  return (
    <div className="App">
      <input onChange={onChangeHandler} onKeyDown={onKeyDownHandler} value={value} type="number" placeholder='seconds'/>
      <button onClick={onCLickHandler}>start</button>
      <p>{`${hours}:${minutes}:${seconds}`}</p>
      <p></p>
    </div>
  );
}

export default App;
