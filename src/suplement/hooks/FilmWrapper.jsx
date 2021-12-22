import React from "react";
import Film from "./Film";

function FilmWrapper({ filmData, visitor, newTitleFunction }) {
  return (
    <div>
      {/*                AAA                          RRR */}
      <Film filmData={filmData} newTitleFunction={newTitleFunction} />
      <h3>Visitors : {visitor}</h3>
    </div>
  );
}

export default FilmWrapper;
