import React from "react";

function App() {
  const [tags, setTags] = React.useState(["happy", "cheerful"]);

  const handleClick = () => {
    // Add
    setTags([...tags, "exciting"]);

    // remove
    setTags(tags.filter((tag) => tag !== "happy"));

    // Update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  return <></>;
}

export default App;
