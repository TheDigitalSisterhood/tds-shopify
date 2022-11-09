import Head from "next/head";
import Image from "next/image";

import { gql, useShopQuery } from "@shopify/hydrogen";

import styles from "../styles/Home.module.css";
import strings from "../lib/strings";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{strings.title}</title>
        <meta name="description" content={strings.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <span>About</span>
      </main>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {},
  };
}
