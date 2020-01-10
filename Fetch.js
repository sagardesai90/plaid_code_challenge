fetch("http://interview.plaid.com/data/footer.json")
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
