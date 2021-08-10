function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
 /* let bookCount = 0
  for (let i=0; i<books.length; i++){
    if (!books[i].borrows[0].returned){
    bookCount++;
    }
  }
  return bookCount;*/
  
  let borrowed = books.filter((book) => book.borrows[0].returned === false);
  const totalBorrowed = borrowed.length;
  return totalBorrowed;
  console.log(books);
}

function getMostCommonGenres(books) 
{
 const bookGenres = books.map((book) => book.genre);
  const temp = [];
  bookGenres.map((genre) => {
    const genreLocation = temp.findIndex((element) => element.name === genre);
    if (genreLocation >= 0) {
      temp[genreLocation].count = temp[genreLocation].count + 1;
    } else {
      temp.push({ name: genre, count: 1 });
    }
  });
  temp.sort((a, b) => b.count - a.count);
  
  return temp.slice(0,5);
}

function getMostPopularBooks(books) {
  
  /*const borrows = books.reduce(book=>({name:book.title, count:book.borrows.length}));
  borrows.sort((a,b) => b.count - a.count);
  return borrows.slice(0,5);*/
  
  let array = [];
  const borrows = books.reduce((acc, book) => { array.push({ name: book.title, count: book.borrows.length }); }, []);
  array.sort((a,b) => b.count - a.count);
  return array.slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  const popularAuthors = [];

  for (let author of authors) {
    const authorName = `${author.name.first} ${author.name.last}`;
    let count = 0;
    for (let book of books) {
      if (author.id === book.authorId) {
        count += book.borrows.length;
      }
    }
    const authorObject = { name: authorName, count: count };
    popularAuthors.push(authorObject);
  }
  popularAuthors.sort((a,b) => b.count - a.count);
  return popularAuthors.slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
