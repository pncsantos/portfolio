import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Paul Santos - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative pb-24 lg:space-y-24">
        <Banner />
        <AboutMe />
        <section className="md:space-y-24"></section>
      </main>
      {/* Modal */}
    </div>
  );
};

export default Home;
