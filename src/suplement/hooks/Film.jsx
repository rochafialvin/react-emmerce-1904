import { memo } from "react";

function Film({ filmData, newTitleFunction }) {
  console.log("Render Film Component");
  const { title, releaseDate } = filmData;
  return (
    <div>
      <h1>Title : {title}</h1>
      <h1>Release Date : {releaseDate}</h1>
      <button onClick={newTitleFunction}>Change Title</button>
    </div>
  );
}

export default memo(Film);

/*
  1. Prosec checking props : false
  2. Menentukan render ulang atau tidak

*/
