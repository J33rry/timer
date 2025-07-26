"use client";
import React, { useEffect, useState } from "react";

function Flipper({ unit }) {
    const [timer, setTimer] = useState(getUnitValue(unit));
    const [shuffle, setShuffle] = useState(false);

    function getUnitValue(unit) {
        const now = new Date();
        if (unit === "second") return now.getSeconds();
        if (unit === "minute") return now.getMinutes();
        if (unit === "hour") return now.getHours();
        return 0;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const currentValue = getUnitValue(unit);
            setTimer((prev) => {
                if (prev !== currentValue) {
                    setShuffle(true);
                    // Reset shuffle after animation
                    setTimeout(() => setShuffle(false), 600);
                    return currentValue;
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [unit]);

    return (
        <div className="relative size-48 bg-white text-black">
            <div className="absolute top-0 text-8xl overflow-y-hidden flex items-center h-[50%] w-[100%] justify-center">
                <div className="translate-y-1/2">{timer}</div>
            </div>
            <div className="absolute top-[50%] h-0.5 bg-black w-full"></div>
            <div className="absolute top-[50%] left-0 h-6 w-3 rounded-r-full bg-black -translate-y-1/2"></div>
            <div className="absolute top-[50%] right-0 h-6 w-3 rounded-l-full bg-black -translate-y-1/2"></div>
            <div className="absolute bottom-0 text-8xl flex items-center h-[50%] w-[100%] justify-center overflow-y-hidden">
                <div className="-translate-y-1/2">{timer}</div>
            </div>
            {/* <div className="absolute bottom-0 text-4xl">{timer}</div> */}
        </div>
    );
}

export default Flipper;
