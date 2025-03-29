const searchInput = document.getElementById("searchInput");
const contentList = document.getElementById("contentList");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const listItems = contentList.getElementsByTagName("li");

  for (let i = 0; i < listItems.length; i++) {
    const listItem = listItems[i];
    const listItemText = listItem.textContent.toLowerCase();

    if (listItemText.includes(searchTerm)) {
      listItem.style.display = "";
    } else {
      listItem.style.display = "none";
    }
  }
});
