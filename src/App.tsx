import { useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import './App.css';
import ContextData from './main';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

export default function App() {
  const [count, setCount] = useState(0);
  const contextData = useContext(ContextData);
  const onClickHandle = () => setCount((prev) => prev + 1);
  const inputRef = useRef(null);
  const [inputRefStr, setInputStr] = useState('');
  const [state, dispatch] = useReducer(reducer, 0);

  // useMemo
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  const square = useMemo(() => {
    let i = 0;

    console.log('call square');

    while (i < 100000000) {
      i++;
    }

    return count02 * count02;
  }, [count02]);

  const onclickRef = () => {
    if (inputRef.current) {
      console.log('Input value:', (inputRef.current as HTMLInputElement).value);
      setInputStr((inputRef.current as HTMLInputElement).value);
    }
  };

  useEffect(() => {
    console.log('call useEffect');
  }, [count]);

  return (
    <>
      <h1>useState,useEffect</h1>
      <button onClick={onClickHandle}>+</button>
      <p>{count}</p>
      <hr />
      <h1>useContext</h1>
      <p>{contextData.name}</p>
      <p>{contextData.age}</p>
      <hr />
      <h1>useRef</h1>
      <input
        type='text'
        ref={inputRef}></input>
      <button onClick={onclickRef}>useRef</button>
      <p>入力値：{inputRefStr}</p>
      <hr />
      <h1>useReducer</h1>
      <p>カウント：{state}</p>
      <button
        onClick={() => {
          dispatch({ type: 'increment' });
        }}>
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'decrement' });
        }}>
        -
      </button>
      <hr />
      <h1>useMemo</h1>
      <div>カウント1:{count01}</div>
      <div>カウント2:{count02}</div>
      <div>結果:{square}</div>
      <button
        onClick={() => {
          setCount01(count01 + 1);
        }}>
        +
      </button>
      <button
        onClick={() => {
          setCount02(count02 + 1);
        }}>
        +
      </button>
    </>
  );
}
