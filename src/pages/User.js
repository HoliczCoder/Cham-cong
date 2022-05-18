import React, { useEffect } from "react";
import Calendar from "react-calendar/dist/umd/Calendar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function User() {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState([]);
  const [showDate, setShowDate] = useState([0]);
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
  return (
    <div>
      <div className="flex flex-row items-center justify-end">
        <div className="m-2">Đăng xuất</div>
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
                <Link to={`/edit?${1}`}>
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
      <div className="flex flex-row items-center justify-center text-3xl font-bold">
        Chấm công
      </div>
    </div>
  );
}
