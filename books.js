function findAuthorById(authors, id) {
  return authors.find(author => author.id == id)
}

function findBookById(books, id) {
  console.log(books);
  for (let i = 0; i< books.length; i++)
  {
    if (books[i].id == id)
    {
        return books[i];
    }
  }
}

function combineArrays(array1, array2)
{
  finalArray = []
  finalArray.push(array1);
  finalArray.push(array2);
  return finalArray;
}
function partitionBooksByBorrowedStatus(books) 
{
  array1 = [];
  array2 = [];
  for (let i = 0; i<books.length; i++)
  {
      if(!books[i].borrows[0].returned)
      {
        array1.push(books[i]);
      }
      if(books[i].borrows[0].returned)
      {
        array2.push(books[i]);
      }
  }
return combineArrays(array1, array2);
}

function getBorrowersForBook(book, accounts) 
{
  let result = [];
  let borrowArray = book.borrows;  
  borrowArray.forEach(borrow=>{ 
    let account = accounts.find(acc => acc.id === borrow.id);
    let obj = account;
    obj['returned'] =  borrow.returned;
    result.push(obj);
  })
  console.log(result);
  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
