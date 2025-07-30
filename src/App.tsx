import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Tokyo", "Islamabad", "Mosco", "London"];

  return (
    <div>
      <ListGroup heading="Cities" items={items} />
    </div>
  );
}

export default App;
