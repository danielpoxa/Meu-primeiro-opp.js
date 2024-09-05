'use client';

import React, { useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import styles from './useLocalStorage.module.css'; // Import the CSS module

function App() {
  const [storedValue, setStoredValue] = useLocalStorage('meuValor', '');
  const [inputValue, setInputValue] = useState('');

  const handleSave = () => {
    setStoredValue(inputValue);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Salvar Nomes</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Digite algo..."
        className={styles.input}
      />
      <button onClick={handleSave} className={styles.button}>
       Armazenar
      </button>
      <p className={styles.storedValue}>Valor armazenado: {storedValue}</p>
    </div>
  );
}

export default App;
