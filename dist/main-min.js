function Connection(n,t,e){return fetch(n,{method:"post",mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},body:JSON.stringify(t)}).then(n=>n).then(n=>n),{status:200,message:"Success connected"}}function GerateUuid(){var n,t,e="";for(n=0;n<32;n++)t=16*Math.random()|0,8!=n&&12!=n&&16!=n&&20!=n||(e+="-"),e+=(12==n?4:16==n?3&t|8:t).toString(16);return e}