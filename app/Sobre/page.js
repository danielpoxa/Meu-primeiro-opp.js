'use client';

import React from 'react';
import styles from './sobre.module.css'; // Importa o CSS

function Sobre() {
  // Função para abrir o link
  const openLink = () => {
    window.open('https://osvingadores.fandom.com/pt-br/wiki/Homem_de_Ferro', '_blank');
  };

  return (
    <div className={styles.container}>
      <div className={styles.sobreContainer}>
        <h2 className={styles.sobreTitle}>Sobre o Homem de Ferro</h2>
        <button className={styles.sobreButton} onClick={openLink}>
          Saiba Mais
        </button>
      </div>
    </div>
  );
}

export default Sobre;
