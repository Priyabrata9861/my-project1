import React from "react";

function Show() {
  const Mypeople = [
    {
      Name: "Jhon",
      Age: "19",
    },
    {
      Name: "Ram",
      Age: "29",
    },
    {
      Name: "Roy",
      Age: "18",
    },
    {
      Name: "Rocky",
      Age: "24",
    },
  ];
  return (
    <>
      {Mypeople.map((person,index) => (
        <div key={index}>
        <p>{person.Name}</p>
        <p>{person.Age}</p>
        </div>
      ))}
    </>
  );
}

export default Show;
