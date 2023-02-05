import React from "react";

const User = (props) => {
  const data = "Anand Pandey";
  return (
    <div>
      <h2>User Name : </h2>
      <button onClick={() => props.alert(data)}>Click Me</button>
    </div>
  );
};
export default User;
