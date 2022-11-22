import Head from "next/head";
import Image from "next/image";

import styles from "../styles/styles.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organize suas tarefas</title>
      </Head>

      <main className={styles.contentContainer}>
        <Image
          src={"/images/board-user.svg"}
          alt={"Ferramenta Board"}
          width={600}
          height={600}
        />

        <section className={styles.callToAction}>
          <h1>
            Uma ferramenta para seu dia a dia Escreva, planeje e organize-se..
          </h1>

          <p>
            <span>100% Gratuita</span> e online..
          </p>
        </section>

        <div className={styles.donaters}>
          <Image
            src={"/images/user.jpeg"}
            alt={"Usuário 1"}
            width={65}
            height={65}
          />
        </div>
      </main>
    </>
  );
}
