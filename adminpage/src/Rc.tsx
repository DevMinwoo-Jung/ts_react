import Greetings from "Greetings";
import React from "react";

// eslint-disable-next-line react/function-component-definition
// const Rc: React.FC = () => {
//   return (
//     <div className="App">
//       <Greetings name="짱멋진개발자정민우" />
//     </div>
//   );
// };

// eslint-disable-next-line react/function-component-definition
const Rc: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return (
    <Greetings name="인생 맛깔나게 사는 개발자 정민우" onClick={onClick} />
  );
};

export default Rc;
