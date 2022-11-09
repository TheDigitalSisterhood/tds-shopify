import React from "react";
import { SocialLinks } from "../socials/SocialLinks";
import Header from "./header";
import Footer from "./footer";
import styles from "./style.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Header onSearchPressed={() => alert("Search")} />
      <div className={styles.content}>{children}</div>
      <SocialLinks />
      <Footer />
    </div>
  );
}
