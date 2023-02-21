# Explanation 
This code uses native Array ES6 functions like map() to transform the array of book objects returned by the Google Books API into an array of HTML strings that can be displayed on the screen. It also uses recursion to iterate over the books array.

The searchBooks() function takes a search query and makes an HTTP request to the Google Books API using Axios. It then calls the displayResults() function with the array of book objects returned by the API.

The displayResults() function takes an array of book objects and generates HTML for each book using template literals. It then inserts the HTML into the DOM.

The handleSearch() function is called when the user clicks the "Search" button. It reads the search query from the input field and passes it to the searchBooks() function.

Finally, the app uses the external library Axios to make HTTP requests to the Google Books API. This allows us to make requests in a simple and concise way without having to worry about the details of making HTTP requests in JavaScript.

# Overview
This is a basic index API with a searchbar where a user can look for a book by name or author and it will bring up a list of results from the google books database


* [Book Search App Javascript](https://vimeo.com/800714689/f09e1977a0)

# Network Communication

The achitecture used in this project is host to host, meaning from your computer you will connect to another device. 
This program is running moules that allow the host to connect through the network to another host either in the same network or in another network.

# Development Environment

* Visual Studio Code
* Axios external library
* Git 
* Github 
* Javascript 
* Basic HTML
* Vimeo

# Useful Websites

* [Google books ](https://books.google.com)

# Future Work

* Make the option selection working
* Adding the port's name or protocol used in the port
* Add a script to print a report to add to the ethical hacking report