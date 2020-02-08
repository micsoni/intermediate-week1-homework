fetch("https://swapi.co/api/people/1") // make the request
  .then(response => response.json()) // convert response to json
  .then(lukesData => {
    const lukesInformation = document.getElementById("lukeSkywalker");
    lukesInformation.innerHTML = `<h1> Luke Skywalker </h1>
        <pre> ${JSON.stringify(lukesData, null, " ")} </pre>`;
  })
  .catch(error => {
    console.log("Error is:", error);
  });

function darthVader() {
  fetch("https://swapi.co/api/people/4/")
    .then(response => response.json())
    .then(darthVaderData => {
      const darthVadersInformation = document.getElementById("darthVader");
      darthVadersInformation.innerHTML = `<h2> Darth Vader </h2>
        <pre> ${JSON.stringify(darthVaderData, null, " ")} </pre>`;
    })
    .catch(error => {
      console.log("Error is:", error);
    });
}
