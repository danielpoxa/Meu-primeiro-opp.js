"use client";  // Adiciona essa linha no início do arquivo

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";  // Mantém a atualização para next/navigation

export default function Opera() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("https://www.opera.com/pt-br/computer/thanks?ni=eapgx&os=windows&gclid=EAIaIQobChMI1ozplqa7iAMVgUBIAB2QjQX-EAAYASAAEgL0ofD_BwE");
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/Opera 1.png"
          alt="Opera"
          width={700}
          height={700}
        />
       
      </div>
      <h1 className={styles.title}>O navegador dos gamers</h1>

      <p className={styles.titulo}></p>

      <p className={styles.description}>
        Obtêm uma experiência de jogo e navegação incomparável no telemovel e no
        computador. Define limites de uso de CPU, RAM e rede. Usa o Discord & Twitch na barra lateral.
      </p>

      {/* Torna a imagem clicável, envolvendo-a em uma tag <a> */}
      <a href="/" target="_blank" rel="noopener noreferrer">
        <Image
          className={styles.img1}
          src="/descarregar opera.png"
          alt="Descarregar Opera GX"
          width={500}
          height={90}
        />
      </a>
    </div>
  );
}
