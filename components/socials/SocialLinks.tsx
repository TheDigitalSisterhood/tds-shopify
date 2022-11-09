import Link from "next/link";
import strings from "../../lib/strings";
import styles from "./socials.module.scss";

export function SocialLinks(): any {
  return (
    <>
      <div className={styles.social}>
        <h1 className={styles.header}>{strings.lets_be_friends}</h1>
        <div className={styles.social_links}>
          <div className={styles.svg_twitter}>
            <Link
              href="https://twitter.com/thedigitalsis"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="152"
                height="169"
                viewBox="0 0 152 169"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg"
              >
                <rect
                  x="15.4252"
                  y="0.135026"
                  width="136.674"
                  height="155.948"
                  rx="9.5"
                  transform="rotate(5.4752 15.4252 0.135026)"
                  fill="#424DA1"
                  fillOpacity="0.2"
                  stroke="black"
                />
              </svg>
            </Link>
          </div>
          <div className={styles.svg_instagram}>
            <Link
              href="https://instagram.com/thedigitalsisterhood?igshid=YmMyMTA2M2Y="
              rel="noreferrer"
              target="_blank"
            >
              <svg
                width="152"
                height="170"
                viewBox="0 0 152 170"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-0.43672"
                  y="14.8801"
                  width="136.674"
                  height="155.948"
                  rx="9.5"
                  transform="rotate(-6.01861 -0.43672 14.8801)"
                  fill="#C16C6F"
                  fillOpacity="0.2"
                  stroke="black"
                />
              </svg>
            </Link>
          </div>

          <div className={styles.svg_tiktok}>
            <Link
              href="https://www.tiktok.com/@thedigitalsisterhood?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="146"
                height="164"
                viewBox="0 0 146 164"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8.89018"
                  y="0.716399"
                  width="136.674"
                  height="155.948"
                  rx="9.5"
                  transform="rotate(3.08854 8.89018 0.716399)"
                  fill="#0B7A5A"
                  fillOpacity="0.2"
                  stroke="black"
                />
              </svg>
            </Link>
          </div>

          <div className={styles.svg_youtube}>
            <Link
              href="https://www.youtube.com/channel/UCyP9IZwHkcKUmwrYEUzKAfA/featured"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="146"
                height="164"
                viewBox="0 0 146 164"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.386253"
                  y="8.18229"
                  width="136.674"
                  height="155.948"
                  rx="9.5"
                  transform="rotate(-3.16928 0.386253 8.18229)"
                  fill="#B45354"
                  fillOpacity="0.2"
                  stroke="black"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
