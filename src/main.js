async function Connection(host, access_token) {

  const connect = fetch(host, {
    method: 'post',
    headers : {
      "access_token": access_token,
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify({test: 1})
  })
  .then(response => {
    response.json()
  })
  .then(data => {
    return data
  })

  return connect;
}
