function apiService() {
    return fetchAPI()
      .then(handleResponse)
      .catch(handleError);
  }
  
  function fetchAPI() {
    return fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/');
  }
  
  function handleResponse(response) {
    if (!response.ok) {
      throw new Error("Error HTTP: " + response.status);
    }
    return response.json();
  }
  
  function handleError(error) {
    console.log("Error:", error);
  }
  
  export default apiService;