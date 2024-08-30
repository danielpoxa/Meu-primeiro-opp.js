import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Homem de Ferro</h1>
      <p className={styles.description}>
     " Homem de Ferro (Iron Man) é um dos personagens mais icônicos da Marvel Comics, criado por Stan Lee, Larry Lieber, Don Heck, e Jack Kirby. Ele fez sua primeira aparição em "Tales of Suspense #39" em 1963. O personagem é o alter ego de Tony Stark, um gênio, bilionário, playboy e filantropo, que usa sua inteligência e recursos para criar uma armadura poderosa, transformando-se no super-herói Homem de Ferro".
      </p>
    </div>
  );
}
