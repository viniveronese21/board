import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { SigninButton } from "../SignInButton";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <Image
            src={"/images/logo.svg"}
            alt={"Logo Meu Board"}
            width={85}
            height={85}
          />
        </Link>

        <nav>
          <Link href="/" passHref>
            Home
          </Link>
          <Link href="/board" passHref>
            Meu Board
          </Link>
        </nav>

        <SigninButton />
      </div>
    </header>
  );
}
