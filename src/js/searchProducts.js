const searchEl = document.getElementById("search");
searchEl.addEventListener("input", () => {
  const title = document.querySelectorAll(".title");
  const searchText = searchEl.value.toLowerCase();
  title.forEach((title) => {
    if (title.textContent.toLowerCase().includes(searchText)) {
      title.parentElement.parentElement.style.display = "block";
    } else {
      title.parentElement.parentElement.style.display = "none";
    }
  });
});