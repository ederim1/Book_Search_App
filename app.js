const API_URL = 'https://www.googleapis.com/books/v1/volumes';

function searchBooks(query) {
  const url = `${API_URL}?q=${query}`;

  axios.get(url)
    .then(response => {
      const books = response.data.items;
      displayResults(books);
    })
    .catch(error => {
      console.error(error);
    });
}

function displayResults(books) {
  const resultsDiv = document.getElementById('results');

  if (books.length === 0) {
    resultsDiv.innerHTML = 'No books found.';
    return;
  }

  const booksHtml = books.map(book => {
    const title = book.volumeInfo.title;
    const author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Unknown author';
    const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : '';
    const description = book.volumeInfo.description ? book.volumeInfo.description.substring(0, 100) + '...' : 'No description available';

    return `
      <div class="book">
        <img src="${thumbnail}" alt="${title}" class="book-cover">
        <div class="book-info">
          <h3>${title}</h3>
          <p>${author}</p>
          <p>${description}</p>
        </div>
      </div>
    `;
  }).join('');

  resultsDiv.innerHTML = booksHtml;
}

function handleSearch() {
  const query = document.getElementById('query').value;
  searchBooks(query);
}

document.getElementById('search').addEventListener('click', handleSearch);
