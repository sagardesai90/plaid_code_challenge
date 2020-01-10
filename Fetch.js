// const myHeaders = new Headers();

const myRequest = new Request("http://interview.plaid.com/data/footer.json", {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
    // "Access-Control-Allow-Origin": "http://127.0.0.1:5500/"
  },
  mode: "cors"
});

fetch(myRequest)
  .then(function(resp) {
    console.log(resp, "resp");
    return resp.text();
  })
  .then(function(html) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, "text/html");
  })
  .catch(function(err) {
    console.warn("Something went wrong.", err);
  });
