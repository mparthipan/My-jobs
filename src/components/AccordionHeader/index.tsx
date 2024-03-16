import React from "react";
import ToggleIcon from "../../ToggleIcon";
import { Container } from "./styles.ts";

function AccordionHeader({ active, index, onClick, name }) {
  return (
    <Container>
    <div className={active ? "tile is-active" : "tile"} onClick={onClick}>
      <div className="left">
        <div>
          <strong>{`${name}`} </strong>
        </div>
      </div>
      <div className="right">
        <ToggleIcon state={active ? true : false} className=""/>
      </div>
    </div>
    </Container>
  );
}
export default AccordionHeader;
