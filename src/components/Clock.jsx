"use client";
import React, { useEffect, useState } from "react";
import "./FlipClock.css";

function Clock() {
    const [hours, setHours] = useState(new Date().getHours());
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    const [seconds, setSeconds] = useState(new Date().getSeconds());
    const [hoursShuffle, setHoursShuffle] = useState(false);
    const [minutesShuffle, setMinutesShuffle] = useState(false);
    const [secondsShuffle, setSecondsShuffle] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            const time = new Date();
            if (hours !== time.getHours()) {
                setHoursShuffle(!hoursShuffle);
                setHours(time.getHours());
            }
            if (minutes !== time.getMinutes()) {
                setMinutesShuffle(!minutesShuffle);
                setMinutes(time.getMinutes());
            }
            if (seconds !== time.getSeconds()) {
                setSecondsShuffle(!secondsShuffle);
                setSeconds(time.getSeconds());
            }
            const timeout = setTimeout(() => {
                setHoursShuffle(false);
                setMinutesShuffle(false);
                setSecondsShuffle(false);
            }, 1000);
            return () => clearTimeout(timeout);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="">
            {/* <FlipClock /> */}
            <div className={"flipClock"}>
                <FlipUnitContainer
                    unit={"hours"}
                    digit={hours}
                    shuffle={hoursShuffle}
                />
                <FlipUnitContainer
                    unit={"minutes"}
                    digit={minutes}
                    shuffle={minutesShuffle}
                />
                <FlipUnitContainer
                    unit={"seconds"}
                    digit={seconds}
                    shuffle={secondsShuffle}
                />
            </div>
        </div>
    );
}

export default Clock;

const AnimatedCard = ({ animation, digit }) => {
    return (
        <div className={`flipCard ${animation}`}>
            <span>{digit}</span>
        </div>
    );
};
const StaticCard = ({ position, digit }) => {
    return (
        <div className={position}>
            <span>{digit}</span>
        </div>
    );
};
const FlipUnitContainer = ({ digit, shuffle, unit }) => {
    let currentDigit = digit;
    let previousDigit = digit - 1;

    if (unit !== "hours") {
        previousDigit = previousDigit === -1 ? 59 : previousDigit;
    } else {
        previousDigit = previousDigit === -1 ? 23 : previousDigit;
    }

    // add zero
    if (currentDigit < 10) {
        currentDigit = `0${currentDigit}`;
    }
    if (previousDigit < 10) {
        previousDigit = `0${previousDigit}`;
    }

    // shuffle digits
    const digit1 = shuffle ? previousDigit : currentDigit;
    const digit2 = !shuffle ? previousDigit : currentDigit;

    // shuffle animations
    const animation1 = shuffle ? "fold" : "unfold";
    const animation2 = !shuffle ? "fold" : "unfold";

    return (
        <div className={"flipUnitContainer"}>
            <StaticCard position={"upperCard"} digit={currentDigit} />
            <StaticCard position={"lowerCard"} digit={previousDigit} />
            <AnimatedCard digit={digit1} animation={animation1} />
            <AnimatedCard digit={digit2} animation={animation2} />
        </div>
    );
};
