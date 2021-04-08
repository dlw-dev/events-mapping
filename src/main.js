async function Connection(host, data, access_token) {

  const connect = await fetch(host, {
    method: 'post',
    headers: new Headers({
      'Content-Type' : 'application/json',
      'X-Custom-Header': 'hello world',
      'access_token': access_token,
    }),
    mode: "no-cors",
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    return data
  });
  return connect;
}

function GerateUuid() {
  var uuid = "", i, random;
  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;

    if (i == 8 || i == 12 || i == 16 || i == 20) {
      uuid += "-"
    }
    uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
  }
  return uuid;
}