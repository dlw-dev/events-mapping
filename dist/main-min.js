async function Connection(n,t){const e=fetch(n,{method:"post",headers:{access_token:t},body:JSON.stringify({test:1})}).then(n=>n.json()).then(n=>console.log(n));return z,e}