'use client';

import React from 'react';
import useToggle from '@/hooks/useToggle';
import styles from './useToggle.module.css'; // Importa o CSS module

export default function Toggle() {
    const [isVisible, toggleVisibility] = useToggle(false);

    return (
        <div className={styles.container}>
            <button onClick={toggleVisibility} className={styles.button}>
                {isVisible ? 'Esconder Texto' : 'Mostrar Texto'}
            </button>
            {isVisible && <p className={styles.text}>Texto visível!</p>}
        </div>
    );
}
