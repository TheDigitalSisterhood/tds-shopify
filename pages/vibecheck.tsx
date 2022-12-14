import Head from "next/head";
import Image from "next/image";

import { gql, useShopQuery } from "@shopify/hydrogen";

import styles from "../styles/Home.module.css";
import strings from "../lib/strings";

export default function Vibecheck() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{strings.title}</title>
        <meta name="description" content={strings.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <span>Vibecheck</span>
      </main>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {},
  };
}
