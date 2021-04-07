async function Connection(host, access_token){

  headers = {'access_token': access_token}

  const connect = await axios.post(host, headers, {
    data : 'teste'
  })

}
