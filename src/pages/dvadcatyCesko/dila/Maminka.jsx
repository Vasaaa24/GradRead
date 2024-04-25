import React from "react";
import { dila } from "../database/databaze";

const Maminka = () => {
  return (
    <>
      <h1 className="uvodRozbor">Maminka</h1>
      <div className="fonObsahuDila">
        <div className="obsahdila textcast">
          <span className="nadpisRozbor">Rozbor díla :</span>
          <div className="textRozbor">{dila[2].dilo}</div>
        </div>

        <div className="obsahdila obMaminka"></div>
        <div className="rozdeleni"></div>
        <div className="obsahdila auMaminka"></div>

        <div className="obsahdila textcast">
          <span className="nadpisRozbor">O autorovi :</span>
          <div className="textRozbor">{dila[2].autor}</div>
        </div>
      </div>
    </>
  );
};

export default Maminka;
