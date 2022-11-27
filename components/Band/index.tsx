import styles from "./Band.module.scss";

export default function BandView({
  theme = "blue",
  children,
}: {
  theme: "blue" | "red" | "green" | "yellow" | "purple";
  children: React.ReactNode | React.ReactNode[] | string;
}) {
  return (
    <div className={`${styles.main} ${styles[theme]}`}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
