var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/uuid/8.3.2/uuid.min.js';    

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
