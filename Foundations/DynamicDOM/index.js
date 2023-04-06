const bookmarkList = [];

function renderBookmarkList() {
  const bookmarkListElement = document.getElementById("bookmark-list");
  bookmarkListElement.innerHTML = "";
  bookmarkList.forEach((bookmark) => {
    const bookmarkElement = document.createElement("li");
    const bookmarkLink = document.createElement("a");
    bookmarkLink.href = bookmark.url;
    bookmarkLink.textContent = bookmark.name;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      const bookmarkIndex = bookmarkList.indexOf(bookmark);
      bookmarkList.splice(bookmarkIndex, 1);
      renderBookmarkList();
    });
    bookmarkElement.appendChild(bookmarkLink);
    bookmarkElement.appendChild(deleteButton);
    bookmarkListElement.appendChild(bookmarkElement);
  });
}

document.getElementById("add-bookmark").addEventListener("click", () => {
  const bookmarkUrl = document.getElementById("bookmark-url").value;
  const bookmarkName = document.getElementById("bookmark-name").value;
  bookmarkList.push({ url: bookmarkUrl, name: bookmarkName });
  renderBookmarkList();
});

renderBookmarkList();
