let books= [{title: 'The Hobbit', author: 'J.R.R. Tolkien', pages: 295, read: 'Yes'}, {title: 'The Fellowship of the Ring', author: 'J.R.R. Tolkien', pages: 398, read: 'Yes'}, 
{title: 'The Two Towers', author: 'J.R.R. Tolkien', pages: 327, read: 'no'}, {title: 'The Return of the King', author: 'J.R.R. Tolkien', pages: 347, read: 'Yes'}];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const inputtitle = document.getElementById("title").value;
    const inputauthor = document.getElementById("author").value;
    const inputpages = document.getElementById("pages").value;
    const inputread = document.getElementById("read").value;
    // books.push({title: inputtitle, author: inputauthor, pages: inputpages, read: inputread}); 
    
    const newbook = new Book(inputtitle, inputauthor, inputpages, inputread);
    books.push(newbook);

    document.querySelectorAll(".card").forEach(element => element.remove());

    displayBooks();
}

function displayBooks() {
    books.forEach((book, index) => {
        var str = '<div id="card" class="card">';
        str += `<h2 class="titleOfBook${index}">` + book.title + '</h2>';
        str += '<h3>' + book.author + '</h3>';
        str += '<p>' + book.pages + '</p>';
        str += `<p class='bookStatus${index}'>${book.read}  <button type="submit" onclick="toggleStatus(document.querySelector('.bookStatus${index}').innerHTML, document.querySelector('.titleOfBook${index}').innerHTML)">Change</button>   </p> <button type="submit" onclick="removeCard(document.querySelector('.titleOfBook${index}').innerHTML)"  id="remove">Remove</button>`;
        str += '</div>'
        document.getElementById('books').innerHTML += str;
    });
}

function removeCard(title) {
    console.log(title)
    books = books.filter(book => book.title !== title);
    document.querySelectorAll(".card").forEach(element => element.remove());
    displayBooks();
}

function toggleStatus(status, title) {
    books.forEach(book => {
       if(book.title === title) {
        if(book.read === "Yes" || book.read === "yes") {
            book.read = "No";
        } else {
            book.read = "Yes";
        }
       } 
    })
    document.querySelectorAll(".card").forEach(element => element.remove());
    displayBooks();
}

displayBooks();