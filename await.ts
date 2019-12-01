import * as fetch from 'node-fetch'
const GOOGLE_URL = 'https://fonts.googleapis.com'

const fonts = [];

const callAPI = async() => {
  const apiCallPromise = await fetch(`${GOOGLE_URL}/css?family=Arial`).catch((err) => {
  
    //! Promise gets rejected
    console.log(err);
  
  });

  const value = await apiCallPromise.text();
  // fonts.push(value)

  return value;

}

(async() => {
  const font = await callAPI();
  console.log(font);
})();

// line 8, 9, and 21 are all running in parallel? ohhh
// 

