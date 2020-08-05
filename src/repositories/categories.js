import config from '../config';

const URL_CATEGORIES = `${config.URL}/categories`;

function getAllCategoriesWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (res) => {
    const resp = await res.json();
    return resp;
  });
}

function getAllCategories() {
  return fetch(`${URL_CATEGORIES} `).then(async (res) => {
    const resp = await res.json();
    return resp;
  });
}

export default {
  getAllCategoriesWithVideos,
  getAllCategories,
};
