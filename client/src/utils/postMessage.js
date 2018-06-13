const postMessage = (endpoint, data) => {
  fetch(endpoint, {
    body: JSON.stringify(data),
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res)
    .catch(error => console.error('Send Message Error:', error));
};

export default postMessage;
