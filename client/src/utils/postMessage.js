const postMessage = (endpoint, data) => {
  return fetch(endpoint, {
    body: JSON.stringify(data),
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export default postMessage;
