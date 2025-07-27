# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days) ##Made a Clock instead of Timer##
- **Bonus**: When a number changes, make the card flip from the middle

### Screenshot
<img width="1710" height="942" alt="Screenshot 2025-07-27 at 5 38 18 AM" src="https://github.com/user-attachments/assets/51c9e61d-c865-407d-bbc6-2b57f6e723d0" />


### Links

- Solution URL: [Solution_URL](https://www.frontendmentor.io/solutions/animated-flip-clock-using-nextjs-and-tailwindcss-j0vC_dWOEi)
- Live Site URL: [ClockZ](https://timer-lyart-six.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

Reviewed some core concepts of tailwindCSS and Custom Animations

```css
@keyframes fold {
    0% {
        transform: rotateX(0deg);
    }
    100% {
        transform: rotateX(-180deg);
    }
}

@keyframes unfold {
    0% {
        transform: rotateX(180deg);
    }
    100% {
        transform: rotateX(0deg);
    }
}
```
```js
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
        <div className="relative size-20 sm:size-24 md:size-38 lg:size-44 perspective-near perspective-origin-[50%_50%] rounded-lg text-third bg-mostly_black shadow-[0_10px_4px_0_rgba(0,0,0,0.4)] text-4xl md:text-6xl lg:text-8xl">
            {/* static */}
            {/* upper */}
            <div className="flex relative justify-between w-full h-[50%] overflow-hidden bg-Desaturated_blue items-end rounded-t-lg -z-10">
                <div className="bg-mostly_black h-4 w-2 md:h-6 md:w-3 rounded-r-full translate-y-1/2"></div>
                <span className="translate-y-1/2">{currentDisplay}</span>
                <div className="bg-mostly_black h-4 w-2 md:h-6 md:w-3 rounded-l-full translate-y-1/2"></div>
            </div>
            {/* lower */}
            <div className="flex relative justify-between w-full h-[50%] overflow-hidden bg-light_blue items-start rounded-b-lg -z-10 text-secondary ">
                <div className="bg-mostly_black h-4 w-2 md:h-6 md:w-3 rounded-r-full -translate-y-1/2"></div>
                <span className="-translate-y-1/2">{currentDisplay}</span>
                <div className="bg-mostly_black h-4 w-2 md:h-6 md:w-3 rounded-l-full -translate-y-1/2"></div>
            </div>
            {/* divider */}
            <div className="absolute top-1/2 h-[1px] bg-mostly_black left-0 right-0 z-10"></div>
            {/* animated */}
            <div
                className={`absolute flex left-0 w-full h-1/2 top-0 justify-between overflow-hidden backface-hidden items-end origin-[50%_100%] rotate-x-0 bg-Desaturated_blue rounded-t-lg transform-3d ${
                    shuffle ? "animate-fold" : ""
                }`}
            >
                <div className="bg-mostly_black h-4 w-2 md:h-6 md:w-3 rounded-r-full translate-y-1/2"></div>
                <span className="translate-y-1/2">{currentDisplay}</span>
                <div className="bg-mostly_black h-4 w-2 md:h-6 md:w-3 rounded-l-full translate-y-1/2"></div>
            </div>
            <div
                className={`absolute flex left-0 w-full h-1/2 top-1/2 justify-between overflow-hidden backface-hidden items-start origin-[50%_0%] rotate-x-180 bg-light_blue rounded-b-lg transform-3d text-secondary ${
                    shuffle ? "animate-unfold" : ""
                }`}
            >
                <div className="bg-mostly_black h-4 w-2 md:h-6 md:w-3 rounded-r-full -translate-y-1/2"></div>
                <span className="-translate-y-1/2">{currentDisplay}</span>
                <div className="bg-mostly_black h-4 w-2 md:h-6 md:w-3 rounded-l-full -translate-y-1/2"></div>
            </div>
        </div>
    );
}

export default Flipper;

```

### Useful resources

- [Flip-clock in CodePen](https://codepen.io/liborgabrhel/pen/JyJzjb)) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Frontend Mentor - [@J33rry](https://www.frontendmentor.io/profile/J33rry)
