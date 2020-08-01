import React from "react";

import Menu from "../../components/Menu";
import initialData from "../../assets/data/dados_iniciais.json";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <BannerMain
        videoTitle={initialData.categorias[0].videos[0].titulo}
        url={initialData.categorias[0].videos[0].url}
        videoDescription={"What is Fron-End"}
      />
      <Carousel ignoreFirstVideo category={initialData.categorias[0]} />

      <Carousel ignoreFirstVideo category={initialData.categorias[1]} />

      <Carousel ignoreFirstVideo category={initialData.categorias[2]} />

      <Carousel ignoreFirstVideo category={initialData.categorias[3]} />

      <Carousel ignoreFirstVideo category={initialData.categorias[4]} />

      <Carousel ignoreFirstVideo category={initialData.categorias[5]} />

      <Footer />
    </div>
  );
}

export default Home;
