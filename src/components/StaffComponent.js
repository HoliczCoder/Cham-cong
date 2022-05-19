import React from "react";

export default function StaffComponent({showNotification,showCalendar}) {
  return (
    <div className="flex justify-between w-full p-4 bg-gray-200 rounded-xl" >
      <div className="flex items-center ">
        <div className="flex items-center justify-center w-20 h-20 mx-2 overflow-hidden rounded-full">
          <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" />
        </div>
        <div>Name</div>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={showNotification} className="h-12 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Xem thông báo
        </button>
        <button onClick={showCalendar} className="h-12 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Xem lịch làm việc
        </button>
      </div>
    </div>
  );
}
