const postMessage = (endpoint, data) => {
  return fetch(endpoint, {
    body: JSON.stringify(data),
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(error => console.error('Fetch Error:', error));
};

export default postMessage;
