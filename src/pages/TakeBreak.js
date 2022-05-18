import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TakeBreakServices } from "../services/TakeBreakServices";
const TakeBreak = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //     if (!localStorage.getItem("token")) {
  //         alert("You must be logged in to access this page");
  //         navigate("/");
  //       }
  // },[])

  const handleSubmit = async () => {
    console.log(date + time + message);
    try {
      await TakeBreakServices.addBreak(
        JSON.stringify({
          date: date,
          time: time,
          message: message,
        }),
        JSON.parse(localStorage.getItem(""))
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest text-center">Xin đi muộn</h1>
            <div className=" mt-4">
              <input
                type="date"
                className="shadow my-2 appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="time"
                className="shadow my-2 appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
              <input
                type="text"
                className="shadow my-2 appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                onClick={() => handleSubmit()}
                className="flex-no-shrink p-2 border-2 rounded text-teal border-teal  hover:bg-teal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeBreak;
