import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero.js";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>FSR</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
      </Layout>
    </>
  );
}
