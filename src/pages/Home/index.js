/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriesRepository from '../../repositories/categories';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository
      .getAllCategoriesWithVideos()
      .then((categoriesWithVideos) => {
        setInitialData(categoriesWithVideos);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {initialData.length === 0 && <div>Loading...</div>}

      {initialData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].name}
                url={initialData[0].videos[0].url}
                videoDescription={initialData[0].videos[0].description}
              />
              <Carousel ignoreFirstVideo category={initialData[0]} />
            </div>
          );
        }
        return <Carousel key={category.id} category={category} />;
      })}
    </PageDefault>
  );
}

export default Home;
