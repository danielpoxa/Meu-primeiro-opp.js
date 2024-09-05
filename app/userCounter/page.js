'use client';

import React from 'react';
import useCounter from '@/hooks/useCounter';
import styles from './userCounter.module.css'; // Importa o CSS

const Page = () => {
    const { count, increment, decrement, reset } = useCounter(); 

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Contador: <span className={styles.counter}>{count}</span></h1>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={increment}>Aumentar</button>
                <button className={styles.button} onClick={decrement}>Diminuir</button>
                <button className={styles.button} onClick={reset}>Resetar</button>
            </div>
        </div>
    );
};

export default Page;
