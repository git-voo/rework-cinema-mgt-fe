import { useEffect, useState } from "react";

export default function CountDown({from, onComplete}){
    const [count, setCount] = useState(from)
    useEffect(() => {
        if (count > 0) {
          const countInterval = setInterval(() => {
            setCount((prev) => prev - 1);
          }, 1000);
          return () => {
            clearInterval(countInterval);
          };
        }else{
            onComplete()
        }
      }, [count]);
return count
}