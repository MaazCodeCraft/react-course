import React from "react";

function App() {
  const [customer, setCustomer] = React.useState({
    name: "Jhon",
    address: {
      city: "Tokyo",
      zipCode: 9822,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 1234 },
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
