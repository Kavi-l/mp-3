import { useEffect, useState } from "react";

// custom hook to change calculator output color based on result
export default function useColor(value: string) {
    const [color, setColor] = useState("black");

    useEffect(() => {
        if (Number(value) < 0) {
            setColor("red");
        } else {
            setColor("black");
        }
    }, [value]); 

    return color; 
}
