import Image from "next/image";
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

import strings from "lib/strings";
import Logo from "assets/logo.png";

import styles from "./header.module.scss";

export default function Header({
  onSearchPressed,
}: {
  onSearchPressed: () => void;
}) {
  const handleSearchClick = (e: any): void => {
    e.preventDefault();
    onSearchPressed();
  };
  return (
    <div className={styles.main}>
      <div className={styles.subMenu}>
        <ul className={styles.icons}>
          <li>
            <Link href="/search" onClick={handleSearchClick}>
              <i className="material-symbols-outlined">search</i>
            </Link>
          </li>
          <li>
            <Link href="/">
              <i className="material-symbols-outlined">person</i>
            </Link>
          </li>
          <li>
            <Link href="/">
              <i className="material-symbols-outlined">shopping_bag</i>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <div className={styles.wrap}>
          <div className={styles.menu}>
            <div className={styles.logo}>
              <Link href="/">
                <Image src={Logo} alt={strings.title} height={60} width={60} />
              </Link>
              <ul className={styles.navigation}>
                <li className={styles.link}>
                  <Link href="/about">About</Link>
                </li>
                <li className={styles.link}>
                  <Link href="/podcast">Podcast</Link>
                </li>
                <li className={styles.link}>
                  <Link href="/vibecheck">Vibecheck</Link>
                </li>
                <li className={styles.link}>
                  <Link href="/products">Merch</Link>
                </li>
                <li className={styles.link}>
                  <Link href="/blog">Blog</Link>
                </li>
                <li className={styles.link}>
                  <Link href="/community">Community</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.actions}>
            <ul className={styles.items}>
              <li>
                <Dropdown>
                  <Dropdown.Toggle
                    className={styles.button}
                    variant="primary"
                    id="dropdown-basic"
                  >
                    Support
                  </Dropdown.Toggle>

                  <Dropdown.Menu align="end" variant="dark">
                    <Dropdown.Item href="#/donate/ethereum">
                      Ethereum
                    </Dropdown.Item>
                    <Dropdown.Item href="#/donate/patreon">
                      Patreon
                    </Dropdown.Item>
                    <Dropdown.Item href="#/donate/paypal">PayPal</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>
                <Button
                  className={styles.button}
                  as="a"
                  href="/vibecheck"
                  variant="primary"
                >
                  Buy Vibecheck
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
