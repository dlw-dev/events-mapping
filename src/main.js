async function Connection(host, access_token) {

  const connect = await fetch(host, {
    method: 'post',
    body: JSON.stringify({test: 1})
  })
  .then(response => response.json())
  .then(data => {
    return data
  });

  return connect;
}
