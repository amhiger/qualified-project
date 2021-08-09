function findAccountById(accounts, id) {
  return accounts.find(accounts => accounts.id == id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account1, account2) => account1.name.last < account2.name.last ? -1 : 1);
}

  function getTotalNumberOfBorrows(account, books) {
  let tempID = account.id;
  let borrow = 0;
  for (let i=0; i < books.length; i++)
  {
    for ( let j=0; j< books[i].borrows.length; j++)
    {
      if (books[i].borrows[j].id == tempID)
      {
      borrow++;
      }
    } 
  }
  return borrow;
}
 
function getBooksPossessedByAccount(account, books, authors) {
  let accountID = account.id;
  let borrowed = [];
  for (let i = 0; i < books.length; i++)
  {
    for (let j = 0; j< books[i].borrows.length; j++)
    {
      if (books[i].borrows[j].id == accountID && books[i].borrows[j].returned == false){
        borrowed.push(books[i]);
      }
    }
  }
   borrowed.forEach(book=>{
    let author = authors.find(person => person.id === book.authorId);
    book['author'] = author;
  })
  return borrowed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
