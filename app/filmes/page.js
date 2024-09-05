'use client';

import React from 'react';
import styles from './filmes.module.css'; // Importa o CSS module

export default function Filmes() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Filmes do Homem de Ferro</h1>
            <div className={styles.movie}>
                <h2 className={styles.subtitle}>Homem de Ferro (2008)</h2>
                <p className={styles.description}>
                    Este é o primeiro filme do MCU e mostra a origem de Tony Stark como o Homem de Ferro. Após ser capturado por terroristas, ele cria uma armadura poderosa para escapar e, posteriormente, decide usar sua tecnologia para combater o crime.
                </p>
            </div>
            <div className={styles.movie}>
                <h2 className={styles.subtitle}>Homem de Ferro 2 (2010)</h2>
                <p className={styles.description}>
                    No segundo filme da franquia, Tony Stark enfrenta novos desafios com a pressão do governo para revelar sua identidade secreta, enquanto lida com o surgimento de novos inimigos e a criação de uma nova armadura.
                </p>
            </div>
            <div className={styles.movie}>
                <h2 className={styles.subtitle}>Os Vingadores (2012)</h2>
                <p className={styles.description}>
                    Embora não seja exclusivamente um filme do Homem de Ferro, Tony Stark desempenha um papel crucial como membro dos Vingadores. O filme reúne vários heróis para enfrentar uma ameaça global, com Stark contribuindo com sua tecnologia e habilidades para a equipe.
                </p>
            </div>
            <div className={styles.movie}>
                <h2 className={styles.subtitle}>Homem de Ferro 3 (2013)</h2>
                <p className={styles.description}>
                    O terceiro filme da série se concentra em Tony Stark lidando com as consequências dos eventos de "Os Vingadores" e enfrentando um novo vilão, o Mandarim, enquanto explora temas de identidade e vulnerabilidade.
                </p>
            </div>
        </div>
    );
}
