import React, { useState } from 'react';

const Edit = () => {
    const [message, setMessage] = useState('')
    const handleEdit = async () => {
        
    }
    return (
        <div>
            <h1>Yêu cầu ngày chấm công</h1>
            <input 
            type = "text"
            value = {message}
            onChange = {(e) => setMessage(e.target.value)}
            />
            <button type = "button" onClick={() => handleEdit()}>submit</button>
        </div>
    );
};

export default Edit;