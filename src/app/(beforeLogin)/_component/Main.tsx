import Image from "next/image";
import styles from "@/app/page.module.css";
import Logo from "@assets/logo.png";
import Link from "next/link";

export default function Main() {
  return (
    <>
      <aside className={styles.left}>
        <Image src={Logo} alt="logo" />
      </aside>
      <section className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </section>
    </>
  );
}
