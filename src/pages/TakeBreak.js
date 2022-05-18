import React, { useState, useEffect } from 'react';
import {  useNavigate } from "react-router-dom";
import { TakeBreakServices } from '../services/TakeBreakServices';
const TakeBreak = () => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    // useEffect(() => {
    //     if (!localStorage.getItem("token")) {
    //         alert("You must be logged in to access this page");
    //         navigate("/");
    //       }
    // },[])

    const handleSubmit = async () => {
        console.log(date + time+ message);
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
    }

    return (
        <div>
            <h1>Xin đi muộn</h1>
            <div>
                <input 
                type="date" 
                value = {date}
                onChange={(e) => setDate(e.target.value)}
                />
                <input 
                type = "time" 
                value = {time}
                onChange={(e) =>setTime(e.target.value)}
                />
                <input 
                type = "text"
                value = {message}
                onChange={(e) => setMessage(e.target.value)}
                />
                <button type = "button" onClick={() => handleSubmit()}>submit</button>
            </div>
        </div>
    );
};

export default TakeBreak;