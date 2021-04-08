async function Connection(host, data) {

  const connect = await fetch(host, {
    method: 'post',
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    return data
  });

  return connect;
}
