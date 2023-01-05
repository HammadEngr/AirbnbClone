import React from "react";

const Title = (props) => {
  const customClass = `${props.className}`;
  return <h1 className={customClass}>{props.children}</h1>;
};

export default Title;
