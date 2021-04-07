async function Connection(host, access_token){

  const connect = await axios.post(host, {
    headers : {
      'access_token': access_token
    }
  }, { data : 'teste'});

  return connect

}
