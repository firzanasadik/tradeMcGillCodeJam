import React from "react"; 
import { useEffect, useState } from "react"; 

{/* registering an event listener on mousemove that gets the current mouse position and sets 
it to state. state value is then returned by the hook. it gets updated each time the mouse moves, 
so every comonent that calls useMousePosition will rendted values when mouse position changes*/}

{/* custom hook*/}

const Cursor = () => {

    const useMousePosition = () => {
        const [position, setPosition] = useState({
            clientX: 0, 
            clientY: 0, 
        });

        const updatePosition = event => {
            const { pageX, pageY, clientX, clientY } = event;

            setPosition({
                clientX,
                clientY,
            });
        }; 

        useEffect(() => {
            document.addEventListener("mousemove", updatePosition, false); 
            document.addEventListener("mouseenter", updatePosition, false);

            return() => {
                document.removeEventListener("mousemove", updatePosition); 
                document.removeEventListener("mouseenter", updatePosition); 
            }
        }, []); 

        return position; 
    }

    const { clientX, clientY } = useMousePosition(); 

    return (
        <div
            style={{
                position: "fixed", 
                top: 0, 
                bottom: 0,
                left: 0,
                right: 0,
                xIndex: 9999,
                pointerEvents: "none"
            }}
        >
            <svg
                width={50}
                height={50}
                viewBox="0 0 50 50"
                style={{
                position: "absolute",
                left: clientX,
                top: clientY,
                transform: "translate(-50%, -50%)",
                }}
            >
                <circle
                    cx="25"
                    cy="25"
                    r="8"
                />
            </svg>
        </div>
    ); 

}     

export default Cursor; 