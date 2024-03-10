import Image from "next/image";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ProductDisplayPage from "./Components/ProductDisplayPage";
import Filter from "./Components/Filter";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Filter />
      <ProductDisplayPage />
      <Footer />
    </>
  );
}
