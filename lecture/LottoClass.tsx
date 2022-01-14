import React, { Component } from 'react';
import BallClass from'./BallClass';

interface State {
  winNumbers: number[];
  winBalls: number[];
  bonus: number | null;
  redo: boolean;
}

function getWinNumbers(){
  const candidate = Array(45).fill(null).map((v,i) => i + 1);
  const shuffle = [];
  while(candidate.length > 0){
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonumsNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((a,b) => a - b);
  return [...winNumbers, bonumsNumber];
}

class Lotto extends Component<{}, State> {
  state = {
    winNumbers: getWinNumbers(), // 당첨 숫자들
    winBalls: [],
    bonus: null, //보너스 공
    redo: false,
  };
  timeouts: number[] = [];


  runTimeouts = () => {
    const {winNumbers} = this.state;
    for(let i = 0; i < this.state.winNumbers.length - 1; i++){
      this.timeouts[i] = window.setTimeout(() => {
        this.setState((prevState) => {
          return {
            winBalls: [...prevState.winBalls, winNumbers[i]],
          }
        });
      }, (i + 1) * 1000);
    }
    this.timeouts[6] = window.setTimeout(() => {
      this.setState({
        bonus: winNumbers[6],
        redo: true,
      });
    }, 7000)
  }


  componentWillUnmount() {
    console.log("willUnmount");
    this.timeouts.forEach((t) => {
      clearTimeout(t);
    });
  }

  
  componentDidMount(){
    console.log("componentDidMount");
    this.runTimeouts();
  }

  componentDidUpdate(prevProps: {}, prevState: State){
    console.log('didUpdate');
    if (this.state.winBalls.length === 0) {
      this.runTimeouts();
    }
    if (prevState.winNumbers !== this.state.winNumbers) {
      console.log('로또 숫자를 생성합니다.');
    }
  }

  onClickRedo = () => {
    this.setState({
      winNumbers: getWinNumbers(), // 당첨 숫자들
      winBalls: [],
      bonus: null, //보너스 공
      redo: false,
    });
    this.timeouts = [];
  };

  render() {
    const {winBalls, bonus, redo} = this.state;
    return (
      <>
      <div>당첨 숫자</div>
      <div id="결과창">
          {winBalls.map((v) => <BallClass key={v} number={v} />)}     
      </div>
      <div>보너스!</div>
      {bonus && <BallClass number={bonus}/>}
      {redo && <button onClick={this.onClickRedo}>한 번 더!</button>}
      </>
    );
  }
}

export default Lotto;