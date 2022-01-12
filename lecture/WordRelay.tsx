import React, { useCallback, useRef, useState } from "react";

const WordRelay = () => {
  const [word, setWord] = useState("민우정");
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const input = inputEl.current;
    if(word[word.length - 1] === value[0]){
      setResult("정답");
      setWord(value);
      setValue('');
      input!.focus();
    } else {
      setResult("땡");
      setValue('');
      input!.focus();
    }
  }, [word, value]);

  const onChange = useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>((e) => {
    setValue(e.currentTarget.value);
  },[value]);

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input 
          ref={inputEl}
          value={value}
          onChange={onChange}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default WordRelay;
