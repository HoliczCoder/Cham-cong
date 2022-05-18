import React, { useState } from "react";
import { useParams } from "react-router-dom";
const Edit = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const handleEdit = async () => {};
  return (
    <div className="flex flex-col items-center ">
      <div className="w-1/2 bg-red-500">
        <h1>Yêu cầu ngày chấm công</h1>
        <div>Param o day la {id}</div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="button" onClick={() => handleEdit()}>
          submit
        </button>
      </div>
    </div>
  );
};

export default Edit;
