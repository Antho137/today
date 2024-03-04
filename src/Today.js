import React from 'react';
import Clock from './Clock';

const Today = () => {
    let today = new Date();
    let day = today.getDay();
    let date = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    return (
        <div className="today">
            <div>
                <p>Today is {weekDays[day]}</p>
                <p>{date}/{month}/{year}</p>          
            </div>         
            <Clock />
        </div>
    );
}

export default Today;