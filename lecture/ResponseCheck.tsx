import React, { useCallback, useRef, useState } from "react";

const ResponseCheck = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작하세요");
  const [result, setResult] = useState<number[]>([]);
  const timeout = useRef<number | null>(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const renderAverage = () => {
    return result.length === 0
    ? null: 
    <>
      <div>평균시간: {result.reduce((a,c) => a + c) / result.length}ms</div>
      <button onClick={onReset}>리셋</button>
    </>
  }

  const onClickScreen = useCallback(() => {
    if (state === 'waiting') {
      timeout.current = window.setTimeout(() => {
        //window.setTimeout을 하면 node에서 실행중인 것으로 착각하여 window.붙여준겨
        setState('now');
        setMessage('지금 클릭');
        startTime.current = new Date().getTime();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤
      setState('ready');
      setMessage('초록색이 되면 클릭하세요.');
    } else if (state === 'ready') { // 성급하게 클릭
      clearTimeout(timeout.current!);
      setState('waiting');
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');
    } else if (state === 'now') { // 반응속도 체크
      endTime.current = new Date().getTime();
      setState('waiting');
      setMessage('클릭해서 시작하세요.');
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  },[state]);

  const onReset = useCallback(() => {
    setResult([]);
  }, []);

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  );
};

export default ResponseCheck;
