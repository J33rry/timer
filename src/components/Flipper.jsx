"use client";
import React, { useEffect, useState, useRef } from "react";

function getUnitValue(unit) {
    const now = new Date();
    if (unit === "day") return now.getDate();
    if (unit === "second") return now.getSeconds();
    if (unit === "minute") return now.getMinutes();
    if (unit === "hour") return now.getHours();
    return 0;
}

function Flipper({ unit }) {
    const [current, setCurrent] = useState(getUnitValue(unit));
    const [shuffle, setShuffle] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentValue = getUnitValue(unit);
            setCurrent((current) => {
                if (currentValue !== current) {
                    setShuffle(true);
                    timeoutRef.current = setTimeout(() => {
                        setShuffle(false);
                    }, 900);
                }
                return currentValue;
            });
        }, 1000);

        return () => {
            clearInterval(interval);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [unit]);

    const currentDisplay = current.toString().padStart(2, "0");
    return (
        <div className="relative size-44 perspective-near perspective-origin-[50%_50%] rounded-lg text-third bg-mostly_black shadow-[0_10px_4px_0_rgba(0,0,0,0.4)]">
            {/* static */}
            {/* upper */}
            <div className="flex relative justify-between w-full h-[50%] overflow-hidden bg-Desaturated_blue items-end rounded-t-lg text-8xl -z-10">
                <div className="bg-mostly_black h-6 w-3 rounded-r-full translate-y-1/2"></div>
                <span className="translate-y-1/2">{currentDisplay}</span>
                <div className="bg-mostly_black h-6 w-3 rounded-l-full translate-y-1/2"></div>
            </div>
            {/* lower */}
            <div className="flex relative justify-between w-full h-[50%] overflow-hidden bg-light_blue items-start rounded-b-lg text-8xl -z-10 text-secondary ">
                <div className="bg-mostly_black h-6 w-3 rounded-r-full -translate-y-1/2"></div>
                <span className="-translate-y-1/2">{currentDisplay}</span>
                <div className="bg-mostly_black h-6 w-3 rounded-l-full -translate-y-1/2"></div>
            </div>
            {/* divider */}
            <div className="absolute top-1/2 h-[1px] bg-mostly_black left-0 right-0 z-10"></div>
            {/* <div className="absolute top-1/2 h-6 w-3 rounded-r-full left-0 z-10 bg-mostly_black -translate-y-1/2"></div> */}
            {/* animated*/}
            <div
                className={`absolute flex left-0 w-full h-1/2 top-0 justify-between overflow-hidden backface-hidden text-8xl items-end origin-[50%_100%] rotate-x-0 bg-Desaturated_blue rounded-t-lg transform-3d ${
                    shuffle ? "animate-fold" : ""
                }`}
            >
                <div className="bg-mostly_black h-6 w-3 rounded-r-full translate-y-1/2"></div>
                <span className="translate-y-1/2">{currentDisplay}</span>
                <div className="bg-mostly_black h-6 w-3 rounded-l-full translate-y-1/2"></div>
            </div>
            <div
                className={`absolute flex left-0 w-full h-1/2 top-1/2 justify-between overflow-hidden backface-hidden text-8xl items-start origin-[50%_0%] rotate-x-180 bg-light_blue rounded-b-lg transform-3d text-secondary ${
                    shuffle ? "animate-unfold" : ""
                }`}
            >
                <div className="bg-mostly_black h-6 w-3 rounded-r-full -translate-y-1/2"></div>
                <span className="-translate-y-1/2">{currentDisplay}</span>
                <div className="bg-mostly_black h-6 w-3 rounded-l-full -translate-y-1/2"></div>
            </div>
        </div>
    );
}

export default Flipper;
