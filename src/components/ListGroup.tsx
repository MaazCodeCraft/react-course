function ListGroup() {
  const items = ["New York", "Tokyo", "Islamabad", "Mosco", "London"];

  return (
    <>
      <h1>Group</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
