async function Connection(host, access_token) {

  const connect = fetch(host, {
    method: 'post',
    body: JSON.stringify({test: 1})
  })
  .then(response => response.json())
  .then(data => console.log(data));

  
  return connect;
}
