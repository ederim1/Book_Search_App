// add external API to get google books
const API_URL = 'https://www.googleapis.com/books/v1/volumes';


// takes a search query and makes an HTTP request to the Google Books API using Axios. 
function searchBooks(query) {
  const url = `${API_URL}?q=${query}`;

  axios.get(url)
    .then(response => {
      const books = response.data.items;

      // It then calls the displayResults() function with the array of book objects returned by the API
      
      displayResults(books);
    })
    .catch(error => {
      console.error(error);
    });
}
// this function thakes an array of book objects and generates HTML for
// each book using template literals it then inserts the HTML in the DOM
function displayResults(books) {
  const resultsDiv = document.getElementById('results');

  if (books.length === 0) {
    resultsDiv.innerHTML = 'No books found.';
    return;
  }
// map() native Array ES6 function
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
