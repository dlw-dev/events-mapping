async function Connection(n,t){return await fetch(n,{method:"post",body:t}).then(n=>n.json()).then(n=>n)}