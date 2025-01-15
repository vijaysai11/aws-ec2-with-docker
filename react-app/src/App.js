import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Replace with your Python backend URL
    axios
      .get("http://localhost:5000/api/data")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <p>Data from backend:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
