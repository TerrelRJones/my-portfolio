import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero.js";
// import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Skills />
        <Projects />
        {/* <Experience /> */}
      </Layout>
    </>
  );
}
