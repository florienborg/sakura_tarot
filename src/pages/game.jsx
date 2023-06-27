const fetch = require('node-fetch');

function test() {
    fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
    .then(response => {
        if (!response.ok) {
          throw new Error("Error HTTP: " + response.status);
        }
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.log("error:", error);
      });
}

