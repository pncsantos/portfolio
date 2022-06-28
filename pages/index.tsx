import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Contacts from "../components/Contacts";
import FeaturedProjects from "../components/FeaturedProjects";
import Header from "../components/Header";
import Summary from "../components/Summary";

import { Movie } from "../typings";

// import requests from "../utils/requests";

// interface Props {
//   netflixOriginals: Movie[];
//   trendingNow: Movie[];
//   topRated: Movie[];
//   actionMovies: Movie[];
//   comedyMovies: Movie[];
//   horrorMovies: Movie[];
//   romanceMovies: Movie[];
//   documentaries: Movie[];
// }

const Home = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Paul Santos - Portfolio</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="relative pb-24 lg:space-y-24">
        <Banner />
        <AboutMe />
        <Summary />
        <FeaturedProjects />
        <Contacts />

        <section className="md:space-y-24"></section>
      </main>
      {/* Modal */}
    </div>
  );
};

export default Home;

// export const getServerSideProps = async () => {
//   // const products = await getProducts(payments, {
//   //   includePrices: true,
//   //   activeOnly: true,
//   // })
//   //   .then((res) => res)
//   //   .catch((error) => console.log(error.message));

//   const [
//     netflixOriginals,
//     trendingNow,
//     topRated,
//     actionMovies,
//     comedyMovies,
//     horrorMovies,
//     romanceMovies,
//     documentaries,
//   ] = await Promise.all([
//     fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
//     fetch(requests.fetchTrending).then((res) => res.json()),
//     fetch(requests.fetchTopRated).then((res) => res.json()),
//     fetch(requests.fetchActionMovies).then((res) => res.json()),
//     fetch(requests.fetchComedyMovies).then((res) => res.json()),
//     fetch(requests.fetchHorrorMovies).then((res) => res.json()),
//     fetch(requests.fetchRomanceMovies).then((res) => res.json()),
//     fetch(requests.fetchDocumentaries).then((res) => res.json()),
//   ]);

//   return {
//     props: {
//       netflixOriginals: netflixOriginals.results,
//       trendingNow: trendingNow.results,
//       topRated: topRated.results,
//       actionMovies: actionMovies.results,
//       comedyMovies: comedyMovies.results,
//       horrorMovies: horrorMovies.results,
//       romanceMovies: romanceMovies.results,
//       documentaries: documentaries.results,
//     },
//   };
// };
