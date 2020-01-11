async function fetchFooter() {
  const res = await fetch("http://interview.plaid.com/data/footer.json");
  const data = await res.json();

  objLength = Object.keys(data).length;
  headers = [];
  headerContents = [];
  Object.keys(data).forEach(item => {
    headers.push(Object.keys(data[item])[0]);
    headerContents.push(Object.values(data[item])[0]);
  });
  console.log(headers, "headers", headerContents, "headerContents");
  let head = "";
  let str = "";
  let str2 = "";
  let str3 = "";
  let str4 = "";
  let str5 = "";
  counter = 1;
  counter2 = 1;

  headers.forEach(header => {
    head += `<h1>` + header + "</h1>";
    counter2 += 1;
    console.log(head, "thisone");
  });
  headers.forEach(header => {
    str += `<h1 id=col${counter.toString()} class="col">` + header + "</h1>";
    counter += 1;
  });

  headerContents[0].forEach(items => {
    console.log(items, "items");
    str2 += `<p class="col-item">` + items + "</p>";
  });
  headerContents[1].forEach(items => {
    console.log(items, "items");
    str3 += `<p class="col-item">` + items + "</p>";
  });
  headerContents[2].forEach(items => {
    console.log(items, "items");
    str4 += `<p class="col-item">` + items + "</p>";
  });
  headerContents[3].forEach(items => {
    console.log(items, "items");
    str5 += `<p class="col-item">` + items + "</p>";
  });

  document.getElementById("footer-head").innerHTML = head;
  document.getElementById("footer-cols").innerHTML = str;
  document.getElementById("col1").innerHTML = str2;
  document.getElementById("col2").innerHTML = str3;
  document.getElementById("col3").innerHTML = str4;
  document.getElementById("col4").innerHTML = str5;
}
fetchFooter();
