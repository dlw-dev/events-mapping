async function Connection(host, data) {

  const connection = await fetch(host, {
    method: 'post',
    mode: "no-cors",
    headers : {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    return data;
  });

  return {
    data : connection,
    status : 200,
    message : 'Success connected'
  };
}

async function GerateUuid() {
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