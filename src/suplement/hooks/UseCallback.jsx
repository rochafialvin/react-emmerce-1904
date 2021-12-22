import React, { useState, useCallback } from "react";
import FilmWrapper from "./FilmWrapper";

export default function UseCallback() {
  // AAA : {title, releaseDate}
  const [filmData, setFilmData] = useState({
    title: "Demon Slayer : Mugen Train",
    releaseDate: "October, 24 - 10 - 2019",
  });
  // BBB : 3
  const [visitor, setVisitor] = useState(0);
  // CCC : "Power Ranger"
  // newTitle: "Power Ranger"
  const [newTitle, setNewtitle] = useState("Kimetsu No Yaiba");

  // cache : RRR
  // newTitleFunction : RRR
  // useCallback menyimpan "callback function" yang menjadi argument pertama
  const newTitleFunction = useCallback(() => {
    setFilmData((prevFilmData) => ({
      ...prevFilmData,
      title: newTitle,
    }));
  }, [newTitle]);

  return (
    <div>
      <FilmWrapper
        filmData={filmData}
        visitor={visitor}
        newTitleFunction={newTitleFunction}
      />
      <button
        onClick={() => {
          setVisitor((prevNumber) => prevNumber + 1);
        }}
      >
        Add Visitor
      </button>
      <button
        onClick={() => {
          setNewtitle("Power Ranger");
        }}
      >
        Set New Title
      </button>
    </div>
  );
}
