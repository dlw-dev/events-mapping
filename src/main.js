async function Connection(host, access_token) {

  const connect = await fetch(host, {
    method: 'post',
    headers: new Headers({
      'access_token': access_token
    }),
    body: JSON.stringify({test: 1})
  })
  .then(response => response.json())
  .then(data => console.log(data));

  return connect;
}
