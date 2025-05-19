// backend/public/books.js
window.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("/api/books");

  if (!res.ok) {
    document.getElementById("bookList").innerHTML = "<li>Failed to load books.</li>";
    return;
  }

  const books = await res.json();

  const list = document.getElementById("bookList");
  books.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book.title;
    list.appendChild(li);
  });
});
