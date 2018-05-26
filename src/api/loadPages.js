import {jsonToJsx} from "jsx-json/jsxToJson";


function loadPages(target, url, parseConfig) {
  return fetch(url, {mode: "cors"})
    .then(response => response.text())
    .then(responseText => jsonToJsx(responseText, parseConfig.componentStore, parseConfig.dataKeys))
    .then(responseJSON => target = responseJSON)
    .then(() => console.log(target));
}

export default loadPages;