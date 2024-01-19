import Head from "next/head";
import Navigation from "@/components/navigation";
import Logo from "@/components/logo";
import Jumbotron from "@/components/jumbotron";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Accessible Web Site</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Logo />
        <Navigation />
        <main id="content">
          <Jumbotron />
          <Testimonials />
        </main>
      </header>
    </>
  );
}
