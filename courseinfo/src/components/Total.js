import React from "react";

const Total = ({ parts }) => {
  const exerciseArr = parts.map((part) => part.exercises);
  return (
    <p>
      <strong>
        total of {exerciseArr.reduce((acc, cv) => acc + cv, 0)} exercises{" "}
      </strong>
    </p>
  );
};

export default Total;
