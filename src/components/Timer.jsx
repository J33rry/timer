import Clock from "./Clock";
import Flipper from "./Flipper";

function Timer() {
    return (
        <div className="p-4 flex flex-col items-center justify-center gap-24">
            <div className="uppercase tracking-widest md:tracking-[0.2em] text-center text-wrap text-white text-2xl md:text-3xl px-4">
                We&apos;re launching soon
            </div>
            <div className="flex gap-3 md:gap-8 lg:gap-12">
                <Clock unit="day" />
                <Clock unit="hour" />
                <Clock unit="minute" />
                <Clock unit="second" />
            </div>
        </div>
    );
}

export default Timer;
