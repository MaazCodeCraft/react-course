import React from "react";

function App() {
  // [false, true]
  const [isVisible, setIsVisible] = React.useState(false);

  function handleClick() {
    setIsVisible(true);
    console.log(isVisible);
  }

  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

export default App;
