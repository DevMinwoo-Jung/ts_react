import React, { useEffect, useRef, useState } from 'react';

const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
} as const;

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
} as const;

// type imgCoords = '0' | '-142px' | '-248px';
// 위에 보다는 아래처럼 하자, 왜냐하면 위처럼 하면 두군데에서 바꿔줘야함
type imgCoords =  typeof rspCoords[keyof typeof rspCoords];

// const computerChoice = (imgCoords) => {
//   return Object.entries(rspCoords).find(function(v) {
//     return v[1] === imgCoords;
//   })[0];
// };

const computerChoice = (imgCoords: imgCoords) => {
  return (Object.keys(rspCoords) as ['바위', '가위', '보']).find((k) => {
    return rspCoords[k] === imgCoords;
  })!
  // !안쓰면 undefined도 된다고 추론된다.
}


const RSP = () => {
  const [result, setResult] = useState<string>();
  const [imgCoord, setImgCoord] = useState<imgCoords>(rspCoords.바위);
  const [score, setScore] = useState(0);
  const interval = useRef<number>();
  const clicked = useRef<boolean>(false);

  useEffect(() => {  // componentDidMound, componentDidUpdate 역할(1대 1로 대응되지는 않는다)
    interval.current = window.setInterval(changeHand, 100);
    return () => { // componentWillUnmount 역할
      clearInterval(interval.current);
    }
  },[imgCoord]);

  const changeHand = () => {
    if(imgCoord === rspCoords.바위){
      setImgCoord(rspCoords.가위);
    } else if(imgCoord === rspCoords.가위){
      setImgCoord(rspCoords.보);
    } else if(imgCoord === rspCoords.보){
      setImgCoord(rspCoords.바위);
    }
  };

  const onClickBtn = (choice: keyof typeof rspCoords) => () => {
    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      setResult("비겼습니다");
    } else if ([-1, 2].includes(diff)) {
      setResult("이겼습니다");
      setScore((prevScore) => prevScore + 1);
    } else {
      setResult("졌습니다.");
      setScore((prevScore) => prevScore - 1);
    }
    setTimeout(() => {
      interval.current = window.setInterval(changeHand, 100);
    }, 1000);
  };

  return (
    <>
    <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}></div>
    <div>
    <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
      <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
      <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
    </div>
    <div>{result}</div>
    <div>현재 {score}점</div>
  </>
  );
};

export default RSP;