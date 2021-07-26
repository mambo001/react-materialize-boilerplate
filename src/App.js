import { useState, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { Button, Card, Row, Col, Icon } from "react-materialize";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <Button
      className="red"
      fab={{
        direction: "left",
        hoverEnabled: false,
      }}
      floating
      large
      node="button"
    >
      <Button
        className="red"
        floating
        icon={<Icon>insert_chart</Icon>}
        node="button"
      />
      <Button
        className="yellow darken-1"
        floating
        icon={<Icon>format_quote</Icon>}
        node="button"
      />
      <Button
        className="green"
        floating
        icon={<Icon>publish</Icon>}
        node="button"
      />
      <Button
        className="blue"
        floating
        icon={<Icon>attach_file</Icon>}
        node="button"
      />
    </Button>
  );
};

export default App;
