import { useState, useEffect } from 'react';

function useCounter(counterStart) {

    const [count, setCount] = useState(counterStart);

    useEffect(() => {
        console.log(count);
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    }

    return {
        count,
        increment
    }

}

export default useCounter;