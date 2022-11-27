import Head from "next/head";
import Marquee from "react-fast-marquee";
import Map from "../components/map";
import BandView from "../components/Band";
import SocialGrid from "../components/SocialGrid";
import { gql, useShopQuery } from "@shopify/hydrogen";

import strings from "../lib/strings";
import styles from "../styles/Community.module.scss";
import BoldText from "../components/BoldText";
import MediaGallery from "../components/MediaGallery";

export default function Community() {
  const media = [
    { url: "", image: "" },
    { url: "", image: "" },
    { url: "", image: "" },
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>{strings.title}</title>
        <meta name="description" content={strings.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.banner}>
          <h1 className={styles.title}>Our Community</h1>
          <div className={styles.globe}>
            <Map />
          </div>
        </div>
        <BandView theme="blue">
          <h2 className={styles.subtitle}>
            Our Stories are traveling the world
          </h2>
        </BandView>
        <BandView theme="red">
          <Marquee gradientColor={[192, 75, 80]} speed={100}>
            <h2 className={styles.subtitle}>
              United Kingdom - Canada - USA - United Arab Emirates - France -
              Saudi Arabia - Sweden
            </h2>
          </Marquee>
        </BandView>
        <BandView theme="yellow">
          <Marquee gradientColor={[234, 190, 87]} speed={150}>
            <h2 className={styles.subtitle}>
              United Kingdom - Canada - USA - United Arab Emirates - France -
              Saudi Arabia - Sweden
            </h2>
          </Marquee>
        </BandView>
        <SocialGrid />
        <MediaGallery title="Join us at our next event." media={media} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {},
  };
}
