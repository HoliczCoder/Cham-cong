import React, { useEffect } from "react";
import Calendar from "react-calendar/dist/umd/Calendar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function User() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [value, onChange] = useState(new Date());
  const [showDate, setShowDate] = useState([0]);
  let navigate = useNavigate()
  const newCalendar = [];
  const formatDate = (date, string) => {
    const newString = date.getDate();
    newCalendar.push(newString);
    //console.log(newCalendar);
    return;
  };
  /////////////////////////////////////////////
  /*  useEffect(() => {
    console.log(date);
  }, [date]); */
  ///////////////////////////////////////////////
  useEffect(() => {
    //console.log("gia tri la", newCalendar);
    const newfilterCalendar = new Set([...newCalendar]);
    //console.log("gia tri la", newfilterCalendar);
    setShowDate([...newfilterCalendar]);
  }, [newCalendar]);

  const logout = () => {
    navigate("/")
  }

  return (
    <div>
      <div className="flex flex-row items-center justify-end">
        <button onClick = {logout} className="m-2">Đăng xuất</button>
        <div className="m-2">Thông báo</div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="bg-red-500 w-1/2 h-1/2 m-10 ">
          <Calendar
            onChange={onChange}
            onClickDay={(e) => {
              const newString = e.getDate();
              const newSet = new Set([...date, newString]);
              return setDate([...newSet]);
            }}
            value={value}
            /*  onActiveStartDateChange={(e) => alert(e)} */
            onViewChange={(e) => alert(e)}
            formatLongDate={(locale, date) => formatDate(date, "YYYY-MMM-dd")}
          ></Calendar>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center bg-red-500 ">
        <div className="grid grid-cols-10">
          {showDate.map((item, index) => {
            return (
              <div key={index} className=" m-5">
                <Link to={`/edit/${1}`}>
                  <button>
                    <div className="m-2 rounded-full w-5 h-5 bg-green-500"></div>
                  </button>
                </Link>
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Link to = "/takebreak">
          <butotn className="" type = "button">Xin đi muộn</butotn>
        </Link>
        
      </div>
      <div className="flex flex-col items-center">
        <div className="w-1/2">
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
          <div className="font-semibold text-3xl flex justify-center">
            <button className="bg-red-500">Chấm công</button>
          </div>
        </div>
      </div>
    </div>
  );
}
