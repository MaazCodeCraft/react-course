import React from "react";

function App() {
  const [pizza, setPizza] = React.useState({
    name: "Spicy Pepperoni",
    topping: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({
      ...pizza,
      topping: [...pizza.topping, "Cheese"],
    });
  };

  return <div></div>;
}

export default App;
