import React, { useState } from "react";
import { Link, Params, useNavigate, useSearchParams } from "react-router-dom";
import { EditResponse } from "../services/EditResponse";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { param } = useParams();
  const [message, setMessage] = useState("");
  const [searchParam] = useSearchParams();
  const [nid, setNid] = useState("");
  const [id, setId] = useState("");
  let navigate = useNavigate();
  const handleEdit = async () => {
    try {
      await EditResponse.addRes(
        JSON.stringify({
          message: message,
        })
      );
      alert("Gửi phẩn hồi thành công");
      navigate("/user");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>Param o day la {param}</div>
      <button className="px-3 float-right mt-5 py-2 text-sm text-blue-100 bg-blue-600 rounded">
        <Link to={"/user"}>Trở về</Link>
      </button>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Gửi phản hồi ngày công</h1>
            <div className="flex mt-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder=""
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                onClick={() => handleEdit()}
                className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:bg-teal"
              >
                Gửi phản hồi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
