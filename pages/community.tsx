import Head from "next/head";

import Map from "../components/map";
import { gql, useShopQuery } from "@shopify/hydrogen";

import styles from "../styles/Community.module.scss";
import strings from "../lib/strings";

export default function Community() {
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
      </main>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {},
  };
}
