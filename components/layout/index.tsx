import React from "react";
import { SocialLinks } from "../socials/SocialLinks";
import Header from "./header";
import Footer from "./footer";
import styles from "./style.module.scss";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const path = router.pathname;

  const getTheme = () => {
    switch (path) {
      case "/":
        return styles.home;
      case "/community":
        return styles.community;
      case "/about":
        return styles.about;
      case "/contact":
        return styles.contact;
      default:
        return styles.home;
    }
  };

  const getHeaderColor = () => {
    switch (path) {
      case "/":
        return "rgba(167, 88, 86, 0.9)";
      case "/community":
        return "rgba(235, 200, 211, 0.9)";
      case "/about":
        return "transparent";
      case "/contact":
        return "transparent";
      default:
        return "rgba(167, 88, 86, 0.9)";
    }
  };

  return (
    <div className={`${styles.container} ${getTheme()}`}>
      <Header
        onSearchPressed={() => alert("Search")}
        color={getHeaderColor()}
      />
      <div className={styles.content}>{children}</div>
      <SocialLinks />
      <Footer />
    </div>
  );
}
