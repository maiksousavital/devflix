import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(videoObj) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(videoObj),
  }).then(async (res) => {
    const resp = await res.json();
    return resp;
  });
}

export default {
  create,
};
