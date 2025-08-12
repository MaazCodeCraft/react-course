import React from "react";

interface Props {
  children: string;
  maxChar?: number;
}

const ExpandableText = ({ children, maxChar = 100 }: Props) => {
  const [isExpended, setIsExpended] = React.useState(false);

  if (children.length <= maxChar) {
    return <p>{children}</p>;
  }

  const text = isExpended ? children : children.substring(0, maxChar);

  return (
    <p>
      {text}...
      <button onClick={() => setIsExpended(!isExpended)}>
        {isExpended ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
