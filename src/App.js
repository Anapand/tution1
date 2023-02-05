import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(10);
  useEffect(() => {}, [count]);
  return (
    <div>
      <h1>useEffect vs useMemo</h1>
      <h2>{count}</h2>
      <h2>{data}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setData(data + 1)}>Update Data</button>
    </div>
  );
};
export default App;
