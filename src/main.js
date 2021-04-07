async function Connection(host, access_token) {

  const connect = await axios.post(
    host,
    { data: "teste" },
    {
      headers: {
        access_token: access_token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-type" : "application/json; charset=UTF-8"
      },
    }
  );

  return connect;
}
