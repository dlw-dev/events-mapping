async function Connection(t,n){return await fetch(t,{method:"post",body:JSON.stringify({test:1})}).then(t=>t.json()).then(t=>t)}