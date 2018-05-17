import React from "react";

const PrimaryNews = ({ incoming }) => {
  return (
    <div>
      <h1>This is flashing news</h1>
      <div>{incoming}</div>
    </div>
  );
};

export { PrimaryNews };
