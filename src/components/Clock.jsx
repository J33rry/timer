import React from "react";
import Flipper from "./Flipper";

function Clock({ unit }) {
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <Flipper unit={unit} />
            <div className="uppercase text-primary tracking-[3px] sm:text-lg sm:tracking-[4px] md:tracking-[6px] text-[10px]">
                {unit}
            </div>
        </div>
    );
}

export default Clock;
