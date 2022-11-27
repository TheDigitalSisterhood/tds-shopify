import Image, { StaticImageData } from "next/image";
import styles from "./hero.module.scss";

export default function Hero({
  image,
  title,
  subtitle,
  height,
  align,
  cta,
}: {
  image: StaticImageData;
  title?: string;
  subtitle?: string;
  height: string;
  align: "left" | "center" | "right";
  cta?: {
    label: string;
    onClick: () => void;
    theme: "primary" | "secondary";
  };
}) {
  const renderAlignment = () => {
    switch (align) {
      case "left":
        return ` ${styles.left}`;
      case "center":
        return ` ${styles.center}`;
      case "right":
        return ` ${styles.right}`;
      default:
        return ` ${styles.center}`;
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.cover} style={{ height }}>
        <Image
          src={image}
          alt={title || "Hero Image"}
          fill
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className={`${styles.wrap}${renderAlignment()}`}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
        {cta && (
          <button className={styles.cta} onClick={cta.onClick}>
            {cta.label}
          </button>
        )}
      </div>
    </div>
  );
}
