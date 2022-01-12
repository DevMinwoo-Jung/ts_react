// import React, { Component } from "react";

// interface State {
//   first: number,
//   second: number,
//   value: string,
//   result: string,
// }

// class GuGUDanClass extends Component<{}, State> {
//   // interface의 첫 번쨰 인자({})는 props자리래..
//   state = {
//     first: Math.ceil(Math.random() * 9),
//     second: Math.ceil(Math.random() * 9),
//     value: "",
//     result: "",
//   };

//   onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (parseInt(this.state.value) === this.state.first * this.state.second) {
//       // 정답 맞췄으면
//       this.setState((prevState) => {
//         return {
//           result: `정답: ${prevState.value}`,
//           first: Math.ceil(Math.random() * 9),
//           second: Math.ceil(Math.random() * 9),
//           value: "",
//         };
//       });
//       if (this.input) {
//         this.input.focus();
//       }
//     } else {
//       this.setState({
//         result: "땡",
//         value: "",
//       });
//       if (this.input) {
//         this.input.focus();
//       }
//     }
//   };

//   onChange = (e: React.FormEvent<HTMLFormElement>) => {
//     this.setState({ value: e.target.value });
//   };

//   input: HTMLInputElement | null = null;

//   onRefInput = (c: HTMLInputElement) => {
//     this.input = c;
//   };

//   render() {
//     return (
//       <>
//         <div>
//           {this.state.first} 곱하기 {this.state.second}는?
//         </div>
//         <form onSubmit={this.onSubmitForm}>
//           <input
//             ref={this.onRefInput}
//             type="number"
//             value={this.state.value}
//             onChange={(e) => this.setState((this.state.value = e.target.value))}
//           />
//         </form>
//         <div>{this.state.result}</div>
//       </>
//     );
//   }
// }

// export default GuGUDanClass;
