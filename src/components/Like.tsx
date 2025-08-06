import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

function Like({ onClick }: Props) {
  const [status, setStatus] = React.useState(false);

  function toggle() {
    setStatus(!status);
    onClick();
  }

  if (status) {
    return <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />;
  }

  return <AiOutlineHeart size={20} onClick={toggle} />;
}

export default Like;
