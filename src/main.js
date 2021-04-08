var script = document.createElement('script');
script.src = 'https://unpkg.com/uuid@latest/dist/umd/uuidv4.min.js';    

document.getElementsByTagName('head')[0].appendChild(script);

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
