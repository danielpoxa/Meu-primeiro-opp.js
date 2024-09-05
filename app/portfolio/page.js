'use client';

import React from 'react';
import styles from './portfolio.module.css'; // Importa o CSS module

export default function Portfolio() {
    return (
        <div className={styles.portfolio}>
            <h1>Homem de Ferro</h1>
            <h2>Tony Stark: O Gênio, Bilionário, Playboy e Filantropo</h2>
            <p>
                Tony Stark, o Homem de Ferro, não é apenas um herói com uma armadura
                poderosa; ele é a personificação da genialidade, inovação e determinação.
                Desde a criação da primeira armadura de ferro nas cavernas do Afeganistão
                até o desenvolvimento das tecnologias mais avançadas que o mundo já viu,
                Stark redefiniu o conceito de super-herói. Sua mente brilhante, combinada
                com sua imensa fortuna, permitiu-lhe construir não só um legado de
                proteção ao planeta, mas também uma influência incomparável no mundo
                moderno. Este portfólio explora a complexidade de sua trajetória, as
                nuances de sua personalidade, e o impacto global de suas ações, tanto
                como herói quanto como líder da Stark Industries. Mergulhe nas páginas
                deste portfólio para descobrir os detalhes das armaduras Mark, os
                desafios enfrentados por Stark, e como ele se tornou um símbolo de esperança
                e inovação para a humanidade.
            </p>
        </div>
    );
}
