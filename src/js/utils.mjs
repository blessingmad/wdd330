// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}
export function renderWithTemplate(templateFn, data, callback, position="afterbegin", clear=true ) {
  if (clear){
    parentElement,innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, template);
  if (callback) {
    callback (data);
  }
}
function loadTemplate(path) {
  return async function () {
    const res = await fetch (path);
    if (res.ok) {
      const html = await res.text();
      return html;
    }
  }
}
export async function loadHeaderFooter () {
  const headerTemplateFn = loadTemplate("/partials/header.htm");
  const footerTemplateFn = loadTemplate("/partials/footer.html");
  const headerEl = document.querrySelector("#main-header");
  const footerEl = document.querrySelector("#main-footer");
  renderWithTemplate(headerTemplateFn, headerEl);
  renderWithTemplate(footerTemplateFn, footerEl);
}