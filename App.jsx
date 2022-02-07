import React from "react";
import CARD from './CARD';
import NAV from "./Nav";
import './index.css';
import Arr from './DArray';

function app() {
  return (
    <>
      <NAV/>
      {Arr.map(function abc(val)
      {
        return(
          <CARD
            key={val.id}
            imgsrc={val.imgsrc}
            ottname={val.ottname}
            sname={val.sname}
            slink={val.slink}
          />
        );
        }
      )}
    </>
  );
}
export default app;