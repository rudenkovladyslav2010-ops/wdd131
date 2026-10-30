const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

const lastModifiedDate = document.querySelector("#lastModified");
lastModifiedDate.textContent = document.lastModified;