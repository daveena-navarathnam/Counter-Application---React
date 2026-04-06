import { useState } from 'react';


export default function CounterApp() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '60px',
        fontFamily: 'Arial',
      }}
    >
      <div
        style={{
          width: '350px',
          margin: 'auto',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          backgroundColor: '#f9f9f9',
        }}
      >
        <h1>Counter Application</h1>
        <h2 style={{ fontSize: '40px' }}>{count}</h2>

        {count === 0 ? <p style={{color : 'red'}}>Minimum limit reached!</p> : null}

        <button
          onClick={increment}
          style={{
            padding: '10px 20px',
            margin: '5px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Increment
        </button>

        <button
          onClick={decrement}
          style={{
            padding: '10px 20px',
            margin: '5px',
            backgroundColor: 'orange',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Decrement
        </button>

        <button
          onClick={reset}
          style={{
            padding: '10px 20px',
            margin: '5px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}