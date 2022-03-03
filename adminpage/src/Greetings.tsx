/* eslint-disable react/button-has-type */
import React from "react";

type GreetingsProps = {
  name: string;
  // children: React.ReactNode; ...??
};

type GreetingsProps2 = {
  name: string;
  // eslint-disable-next-line react/require-default-props
  mark: string;
};

type GreetingsProps3 = {
  name: string;
  // eslint-disable-next-line react/require-default-props
  mark: string;
  // eslint-disable-next-line react/require-default-props
  optional?: string;
  onClick: (name: string) => void; // 아무것도 리턴하지 않는다는 함수를 의미합니다.
};

// eslint-disable-next-line react/function-component-definition
const Greetings = ({ name, mark, optional, onClick }: GreetingsProps3) => {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};

Greetings.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  mark: "!",
};

export default Greetings;
