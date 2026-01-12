import { useState, useEffect } from "react";

export type CountdownProps = {
    name: string,
    epoch: number;
    className?: string,
    id?: string,
}

export default function Countdown({ name, epoch }: CountdownProps) {//main function
    const date = new Date(epoch)

    function updateTimer() {
        const difference = date.getTime() - new Date().getTime();
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        if (seconds<0){
            return "We've moved on to more productive things";
        };
        // return `${days.toString()}d  ${hours.toString()}h  ${minutes.toString()}m  ${seconds.toString()}s`;
        return `${days.toString().padStart(2, '0')}d  ${hours.toString().padStart(2, '0')}h  ${minutes.toString().padStart(2, '0')}m  ${seconds.toString().padStart(2, '0')}s`;
    }

    const [time, setTime] = useState(updateTimer());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(updateTimer());
        }, 100);
        return () => clearInterval(intervalId);
    }, []);

    return ( //What the user sees when component is used
        <div className="countdown-container">
            <span className="countdown-label">{name}</span>
            <span className="countdown-display">{time}</span>
            <span className="countdown-date">{date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            })}</span>
        </div>
    );
}