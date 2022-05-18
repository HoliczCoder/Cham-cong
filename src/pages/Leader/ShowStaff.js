import React, { useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import StaffComponent from "../../components/StaffComponent";

export default function ShowStaff() {
  const [date, setDate] = useState(new Date());
  let navigate = useNavigate();

  const editDot = (day) => {
    console.log(day);
    navigate(`/edit-check/${day}`);
  };

  return (
    <div className="container mx-auto mt-6 space-y-6">
      <div>
        <div className="flex items-center">
          <div className="flex items-center justify-center w-6 h-6 mx-2 overflow-hidden rounded-full">
            <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" />
          </div>
          <div>Leader</div>
        </div>
      </div>
      <div className="flex justify-between space-x-6">
        <div className="w-full space-y-2">
          <div className="text-xl font-bold">Danh sách nhân viên</div>
          <ul className="w-full space-y-6">
            <li>
              <StaffComponent showNotification={()=>navigate(`/notification`)} />
            </li>
            <li>
              <StaffComponent />
            </li>
            <li>
              <StaffComponent />
            </li>
          </ul>
        </div>

        <div>
          <Calendar
            onChange={setDate}
            value={date}
            onClickDay={(value, event) => editDot(value.getDate())}
            tileClassName={({ date, view }) => {
              if (view === "month" && date.getDate() === 20) {
                return "text-green-500";
              }
            }}
          />
          <div className="space-y-4">
            <div className="text-2xl font-bold">Chú thích</div>
            <div className="flex items-center space-x-6">
              <div className="w-8 h-8 bg-green-500"> </div>
              <div>Đã duyệt</div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-8 h-8 bg-yellow-500"> </div>
              <div>Hủy duyệt</div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-8 h-8 bg-red-600"> </div>
              <div>Ngày nghỉ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
