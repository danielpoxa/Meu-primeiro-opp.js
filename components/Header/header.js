'use client';

import React from 'react';
import styles from '@/components/Header/header.module.css';
import Link from 'next/link';
import Image from 'next/image'; // Importa o componente Image do Next.js

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.menu}>
                    <li><Link href="/"></Link></li>
                    <li><Link href="/about">Navegadores</Link></li>
                    <li><Link href="/portfolio">Privacidade e Segurança</Link></li>
                    <li><Link href="/servico">Sobre o Opera</Link></li>
                    <li><Link href="/filmes">Ajuda</Link></li>
                    {/* Substituindo "Descarregar Opera GX" por uma imagem clicável */}
                    <li>
                        <Link href="/">
                            <Image
                                src="/descarregar opera.png" // Substitua pelo caminho correto da imagem
                                alt="Descarregar Opera GX"
                                width={300}
                                height={80}
                            />
                           
                            <div className={styles.img2}>
                            <Image
                                src="/Opera 5.png" // Substitua pelo caminho correto da imagem
                                alt="Descarregar Opera GX"
                                width={120}
                                height={300}
                            />
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
