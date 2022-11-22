import sytles from "./styles.module.scss";
import Image from "next/image";

import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SigninButton() {
  const session = true;

  return session ? (
    <button type="button" className={sytles.signInButton} onClick={() => {}}>
      <Image
        src={"/images/user.jpeg"}
        alt={"Foto do Usuário"}
        width={35}
        height={35}
      />
      Olá Vinicius
      <FiX color="#737380" className={sytles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={sytles.signInButton} onClick={() => {}}>
      <FaGithub color="#ffb800" />
      Entrar com GitHub
    </button>
  );
}
