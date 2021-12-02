import React from "react";
import { useDispatch } from "react-redux";

function DispatchComponent() {
  const dispatch = useDispatch();
  const onSendClick = () => {
    const d = new Date();
    const action = { type: "SIMPAN_WAKTU", payload: { data: d.toString() } };
    dispatch(action);
  };

  return (
    <div>
      <button onClick={onSendClick}>Send data</button>
    </div>
  );
}

export default DispatchComponent;
