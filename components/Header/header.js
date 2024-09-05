'use client';

import React from 'react';
import styles from '@/components/Header/header.module.css';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.menu}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/portfolio">Portfólio</Link></li>
                    <li><Link href="/servico">Serviço</Link></li>
                    <li><Link href="/filmes">Filmes</Link></li>
                    <li><Link href="/userCounter">Click</Link></li>
                    <li><Link href="/useToggle">Mostrar Texto</Link></li>
                    <li><Link href="/useLocalStorage">Armazenar Valor</Link></li>
                    <li><Link href="/useDocumentTitle">Atualizar Título de Documento</Link></li>
                </ul>
            </nav>
        </header>
    );
}
