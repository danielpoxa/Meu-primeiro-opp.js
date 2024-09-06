import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/homemdeferro.png" // Substitua pelo caminho correto da sua imagem
          alt="Homem de Ferro"
          width={400} // Ajustado para um tamanho proporcional
          height={400} // Ajustado para um tamanho proporcional
        />
      </div>
      <h1 className={styles.title}>Homem de Ferro</h1>
      <p className={styles.description}>
        "Homem de Ferro (Iron Man) é um dos personagens mais icônicos da Marvel Comics, criado por Stan Lee, Larry Lieber, Don Heck, e Jack Kirby. Ele fez sua primeira aparição em 'Tales of Suspense #39' em 1963. O personagem é o alter ego de Tony Stark, um gênio, bilionário, playboy e filantropo, que usa sua inteligência e recursos para criar uma armadura poderosa, transformando-se no super-herói Homem de Ferro."
      </p>
    </div>
  );
}
