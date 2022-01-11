import React from 'react';

const GuGuDan = () => {
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