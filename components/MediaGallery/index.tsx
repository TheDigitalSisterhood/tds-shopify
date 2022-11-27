import { useRef } from "react";
import styles from "./MediaGallery.module.scss";

export default function MediaGallery({
  title,
  media,
}: {
  title?: string;
  media: {
    url: string;
    image: string;
  }[];
}) {
  const renderBox = () => {
    return media.map((item, index) => {
      return (
        <div key={index} className={styles.box}>
          {/* <img src={item.image} /> */}
        </div>
      );
    });
  };
  return (
    <div className={styles.main}>
      <div className={styles.wrap}>
        {title && (
          <div className={styles.title}>
            <h1>{title}</h1>
          </div>
        )}
        <div className={styles.grid}>{renderBox()}</div>
      </div>
    </div>
  );
}
