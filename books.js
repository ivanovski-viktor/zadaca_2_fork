const books = [
  {
    title: "HarryPotter and The Hauntly Hallows",
    author: "J.K.R.",
    genre: "Fantasy",
    pages: 400,
    price: 20,
  },
  {
    title: "The Stranger",
    author: "Albert C.",
    genre: "Philosophical",
    pages: 200,
    price: 10,
  },
  {
    title: "Harry Potter The Philosopher Stone",
    author: "J.K.R.",
    genre: "Fantasy",
    pages: 490,
    price: 20,
  },
  {
    title: "Pere Goriot",
    author: "Honoré de Balzac",
    genre: "Realism",
    pages: 400,
    price: 15,
  },
];

// function filterBooksByGenre(genre) {
//   const newArray = books.filter((word) => {
//     return word.genre == genre;
//   });
//   return newArray;
// }
// console.log(filterBooksByGenre("Fantasy"));

// let averagePages = 0;
// let additionVar = 0;
// function findAveragePages() {
//   books.map((book) => {
//     additionVar += book.pages;
//     averagePages = additionVar / books.length;
//     return averagePages;
//   });
// }
// findAveragePages();
// console.log(averagePages);

// function findAveragePages() {
//   let totalPages = books
//     .map((book) => {
//       return book.pages;
//     })
//     .reduce((agg, numOfPages) => {
//       return (agg += numOfPages);
//     }, 0);
//   return totalPages / books.length;
// }
// console.log(findAveragePages());
const numArr = [2, 4, 9, 16].reduce((agg, num) => {
  return (agg += num);
});
console.log(numArr);
