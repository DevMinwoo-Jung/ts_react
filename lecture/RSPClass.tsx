import React, {Component} from 'react';


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

const computerChoice = (imgCoords: imgCoords) => {
  return (Object.keys(rspCoords) as ['바위', '가위', '보']).find((k) => {
    return rspCoords[k] === imgCoords;
  })!
  // !안쓰면 undefined도 된다고 추론된다.
}

interface State {
  result: string,
  imgCoords: imgCoords,
  score: number,
}

class RSPClass extends Component<{}, State> {
  state: State = {
    result: '',
    imgCoords: rspCoords.바위,
    score: 0,
  };


  interval: number | null = null;
  clicked: boolean = false;

  // 첫 render에서만 실행되는것, 보통 비동기 요청 많이 함
  componentDidMount(){
    //const {imgCoord} = this.state; // -142px 여기다가 쓰면 클로저 문제 발생!
    this.interval = window.setInterval(this.changeHand, 1000);
  }

  // 리렌더링 후
  componentDidUpdate(){

  }

  // 컴포넌트 제거되기 직전, 비동기 요청 정리를 많이 함
  componentWillUnmount(){
    clearInterval(this.interval!);
  }

  changeHand = () => {
      const {imgCoords} = this.state; // -142px
      if(imgCoords === rspCoords.바위){
        this.setState({
          imgCoords: rspCoords.가위,
        });
      } else if(imgCoords === rspCoords.가위){
        this.setState({
          imgCoords: rspCoords.보,
        });
      } else if(imgCoords === rspCoords.보){
        this.setState({
          imgCoords: rspCoords.바위,
        });
      }
  }

  onClickBtn = (choice: keyof typeof rspCoords) => () => {
    const {imgCoords} = this.state;
    clearInterval(this.interval!);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoords)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      this.setState({
        result: '비겼습니다!',
      });
    } else if ([-1, 2].includes(diff)) {
      this.setState((prevState) => {
        return {
          result: '이겼습니다!',
          score: prevState.score + 1,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          result: '졌습니다!',
          score: prevState.score - 1,
        };
      });
    }
    setTimeout(() => {
      this.interval = window.setInterval(this.changeHand, 100);
    }, 1000);
  };

  render(){
    const {result, score, imgCoords} = this.state;
    return (
      <>
        <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoords} 0`}}></div>
        <div>
        <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
          <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
          <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    )
  }
}

export default RSPClass;