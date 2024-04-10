import styles from "@/app/page.module.css";

export default async function BeforeLoginLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
