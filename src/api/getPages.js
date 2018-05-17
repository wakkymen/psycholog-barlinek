function getPages(url) {
  return fetch(url).then(response => response.json);
}

export default getPages;