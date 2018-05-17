function getArticles(url) {
  return fetch(url).then(response => response.json);
}

export default getArticles;