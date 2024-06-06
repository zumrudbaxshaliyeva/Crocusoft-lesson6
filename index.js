/// task1

// async function requestApi(url) {
//   let fetchdata = await fetch(url);
//   return fetchdata.json();
// }

// const response = requestApi(
//   "https://api.thecatapi.com/v1/images/search?limit=10"
// ).then((data) => console.log(data.filter((el) => el.url.endsWith(".gif"))));

/// Task 2

// function reqApi() {
//   return fetch("https://api.thecatapi.com/v1/images/search").then((data) =>
//     data.json()
//   );
// }

// const cat = [];

// for (let i = 0; i < 10; ++i) {
//   cat.push(reqApi());
// }

// const newArray = Promise.all(cat)
//   .then((results) => {
//     const replaceKey = results.reduce((acc, cur) => {
//       let obj = cur[0];
//       const tempValue = cur[0].url;
//       delete cur[0].url;
//       return [...acc, [{ ...obj, catUrl: tempValue }]];
//     }, []);
//     console.log(replaceKey);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

/// Task 3

// const getData = async () => {
//   let fetchdata = await fetch("https://api.thecatapi.com/v1/images/search");
//   let data = await fetchdata.json();

//   return data;
// };

// getData()
//   .then((data) => {
//     const newArray = Object.entries(data[0]).reduce((acc, [key, value]) => {
//       if (key === "url") {
//         acc["catUrl"] = value;
//       } else {
//         acc[key] = value;
//       }
//       return acc;
//     }, {});
//     console.log(newArray);
//   })
//   .catch((err) => {
//     console.log(err.name);
//   });

/// Task 4
// function books() {
//   let books = [];
//   return function book(obj) {
//     books.push(Object.values(obj).join(" "));
//     console.log(books);
//   };
// }

// const book1 = {
//   title: "1984",
//   author: "George Orwell",
//   isbn: "9780451524935",
//   genre: "Dystopian",
//   price: 9.99,
//   quantity: 20,
// };
// const book2 = {
//   title: "1997",
//   author: "Harry-Potter",
//   isbn: "8780451524935",
//   genre: "Dystopian",
//   price: 13,
//   quantity: 15,
// };
// const book3 = {
//   title: "1867",
//   author: "Tureng",
//   isbn: "8780451524935",
//   genre: "Tragedy",
//   price: 18,
//   quantity: 25,
// };

// const addBook = books();

// addBook(book1);
// addBook(book2);
// addBook(book3);
