'use client';

import React from 'react';
import styles from './servico.module.css'; // Importa o CSS module

export default function Servico() {
    return (
        <div className={styles.container}>
            <h1 className={styles.quote}>
                “Desenvolvemos tecnologias de ponta, desde sistemas de inteligência artificial até robótica e automação, seguindo os princípios de inovação que fizeram do Homem de Ferro uma lenda.”
            </h1>
        </div>
    );
}
