import React from "react";
import Flipper from "./Flipper";

function Clock({ unit }) {
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <Flipper unit={unit} />
            <div className="uppercase text-primary tracking-[6px]">{unit}</div>
        </div>
    );
}

export default Clock;
