async function Connection(n,t){return fetch(n,{method:"post",headers:{access_token:t,"Access-Control-Allow-Origin":"*"},body:JSON.stringify({test:1})}).then(n=>{n.json()}).then(n=>n)}