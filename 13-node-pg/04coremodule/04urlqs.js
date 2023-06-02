const url = require("url");
const querystring = require("querystring");

//url.parse
const myUrl = url.parse(
  "https://tropangpotchi.com/coderepo?id=1000$premium=true"
);

// console.log(myUrl);

//url.format
const myUrl2 = url.format({
  protocol: "https",
  host: "tropangpotchi.com",
  pathname: "/coderepo",
  query: {
    id: 1000,
    premium: true,
  },
});

// console.log(myUrl2);

//querystring.parse

const myQs = "year=2023&month=april&day=29";

const q = querystring.parse(myQs);
console.log(q);
console.log(q.month);

//quertstring.stringyfy

const myQs2 = querystring.stringify({
  year: 2023,
  month: "April",
  day: 29,
});

console.log(myQs2);
