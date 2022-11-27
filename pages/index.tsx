import Head from "next/head";
import Image from "next/image";

import Hero from "../components/hero";
import BoldText from "../components/BoldText";

import HeroCover from "assets/images/home_cover.png";

import { gql, useShopQuery } from "@shopify/hydrogen";

import styles from "../styles/Home.module.scss";
import strings from "../lib/strings";
import GenericSection from "../components/GenericSection";
import BandView from "../components/Band";

export default function Home() {
  const slogan = (
    <>
      We're{" "}
      <BoldText weight="normal" underline>
        Podcasters
      </BoldText>
      ,{" "}
      <BoldText weight="normal" underline>
        Youtubers
      </BoldText>
      , Creators of{" "}
      <BoldText weight="normal" underline>
        Vibecheck
      </BoldText>
      , and the Digital Sisterhood.
    </>
  );
  return (
    <div className={styles.container}>
      <Head>
        <title>{strings.title}</title>
        <meta name="description" content={strings.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Hero
          image={HeroCover}
          title="You've got more sisters than you think"
          height="750px"
          align="center"
        />
        <GenericSection className={styles.slogan}>
          <h1 className={styles.text}>{slogan}</h1>
        </GenericSection>
        <BandView theme="blue">
          <h1>AS SEEN ON</h1>
        </BandView>
        <BandView theme="red">
          <h1>BuzzFeed News</h1>
        </BandView>
      </main>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {},
  };
}
