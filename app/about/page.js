'use client';

import React from 'react';
import styles from './about.module.css'; // Importa o CSS module

export default function About() {
    return (
        <div className={styles.about}>
            <h1>
                “Homem de Ferro, o alter ego do gênio, bilionário, playboy e filantropo Tony Stark, 
                é um dos super-heróis mais influentes e amados do universo Marvel. Criado por Stan Lee, 
                Larry Lieber, Don Heck e Jack Kirby, ele fez sua primeira aparição nos quadrinhos 
                em Tales of Suspense #39 em 1963.”
            </h1>
        </div>
    );
}
