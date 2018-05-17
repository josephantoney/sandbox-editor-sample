import React from "react";
import { render } from "react-dom";
import { PrimaryNews } from "./primary-news";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <PrimaryNews incoming={"NC USA alliance"} />
  </div>
);

render(<App />, document.getElementById("root"));
