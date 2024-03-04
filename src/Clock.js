import { useState, useEffect } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
};

export default Clock;