import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.main}>
      <div className={styles.image}></div>
      <div className={styles.wrap}></div>
    </div>
  );
}
