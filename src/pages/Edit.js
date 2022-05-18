import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditResponse } from "../services/EditResponse";

const Edit = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate()
  const handleEdit = async () => {
    try {
        await EditResponse.addRes(
          JSON.stringify({
            message: message,
          })
        ) 
        alert("Gửi phẩn hồi thành công")
          navigate("/user")
      } catch (e) {
        console.log(e);
      }
  };
  return (
    <div>
      <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div class="mb-4">
            <h1 class="text-grey-darkest">Gửi phản hồi ngày công</h1>
            <div class="flex mt-4">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder=""
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button 
              onClick={() => handleEdit()}
              class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:bg-teal">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
