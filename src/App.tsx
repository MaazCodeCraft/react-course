import React from "react";

function App() {
  const [game, setGame] = React.useState({
    id: 1,
    player: {
      name: "jhon",
    },
  });

  const handleClick = () => {
    setGame({
      ...game,
      player: {
        ...game.player,
        name: "Bob",
      },
    });
  };

  return <div></div>;
}

export default App;
