import * as fetch from 'node-fetch'
const GOOGLE_URL = 'https://fonts.googleapis.com'
// HAOHAO: im back

const fonts = [];

const apiCall = fetch(`${GOOGLE_URL}/css?family=Arial`).then((response) => {
  
  //? json responses reponse.json()
  //? text/XML response response.text()

  //! Resolving the promise

  response.text().then((result) => {
    // console.log(result);
    console.log("we are being called");
    fonts.push(result);
  })

}).catch((err) => {

  //! Promise gets rejected
  console.log(err);

});

//? Returns a promise
// console.log(apiCall);

console.log(fonts);
