import ListGroup from "./components/ListGroup";

function App() {
  const cities = ["New York", "Islamabad", "Los Angeles"];

  return (
    <>
      <ListGroup
        heading="Miami"
        items={cities}
        onSelectItem={() => console.log("clicked")}
      />
    </>
  );
}

export default App;
