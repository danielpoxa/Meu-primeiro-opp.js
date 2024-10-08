import { useState } from 'react';

const useCounter = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0); // Corrigido: 'rest' para 'reset'
    return { count, increment, decrement, reset };
};

export default useCounter;
