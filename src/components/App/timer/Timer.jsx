import React from 'react'
import { useState } from 'react';



const Timer = () => {
    let time = new Date().toLocaleTimeString();
    const [day, setDay] = useState()
    
    const UpdateTime =  () => {
        time = new Date().toLocaleTimeString();
        setDay(time)
    }
    setInterval(UpdateTime, 1);
    
    return (
        <>
            <div className="timer">
                <div className="timer_hours">
                    {day}
                </div>
            </div>
        </>
    )
}

export default Timer