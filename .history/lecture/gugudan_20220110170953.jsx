import React from 'react';
import { useRef, useState } from 'react';

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    const input = inputEl.current;
    if(parseInt(value) === first * second){
      setResult("정답!");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      input!.focus();
    } else {
      setResult("땡!!");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      input!.focus();
    }
  }

  return (
    <>
      <div>{first} 곱하기 {second}는?</div>
      <form onSubmit={onSubmitForm}>
        <input 
          type="number" 
          ref={inputEl}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          />
      </form>
    </>
  );
};

export default GuGuDan;