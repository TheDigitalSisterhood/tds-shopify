import Image from "next/image";
import strings from "../../../lib/strings";
import Logo from "../../../assets/logo.png";

import styles from "./footer.module.scss";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";

export default function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.wrap}>
        <div className={styles.sector}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Image src={Logo} alt={strings.title} height={125} width={125} />
            </div>
            <div className={styles.mission}>
              <span className={styles.title}>Our Mission</span>
              <p className={styles.text}>{strings.description}</p>
            </div>
          </div>
          <div className={styles.links}>
            <ul className={styles.section}>
              <li className={styles.title}>Company</li>
              <li className={styles.link}>
                <Link href="/">About</Link>
              </li>
              <li className={styles.link}>
                <Link href="/">Blog</Link>
              </li>
              <li className={styles.link}>
                <Link href="/press">Press</Link>
              </li>
              <li className={styles.link}>
                <Link href="/team">Team</Link>
              </li>
            </ul>
            <ul className={styles.section}>
              <li className={styles.title}>Legal</li>
              <li className={styles.link}>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li className={styles.link}>
                <Link href="/terms">Terms</Link>
              </li>
            </ul>
          </div>
          <div className={styles.currency}>
            <span className={styles.title}>Langauge & Currency</span>
            <form className={styles.dropdown}>
              <select name="language">
                <option value="en">English</option>
                <option value="fr">French</option>
              </select>
              <select name="currency">
                <option value="usd">USD</option>
                <option value="euro">EURO</option>
              </select>
            </form>
          </div>
        </div>
        <div className={styles.sector}>
          <div className={styles.newsletter}>
            <div className={styles.info}>
              <span className={styles.title}>Subscribe to our newsletter</span>
              <span className={styles.text}>
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </span>
            </div>
            <span className={styles.action}>
              <form className={styles.subForm}>
                <Form.Control
                  type="email"
                  placeholder="Please enter your email"
                />
                <Button className={styles.button} variant="primary">
                  Subscribe
                </Button>
              </form>
            </span>
          </div>
        </div>
        <div className={styles.sector}>
          <div className={styles.credits}>
            <div className={styles.copyright}>
              &copy; {new Date().getFullYear()} Th Digital Sisterhood, Inc. All
              Rights Reserved.
            </div>
            <div className={styles.socials}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
