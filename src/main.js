const axios = require('axios');

module.export.connection = async function Connection(host, access_token){

  const initial = {
    host: host,
    access_token: access_token,
  };

  return initial

}

async function sendEvent(host, access_token){

  headers = {'access_token': access_token}

  const connect = await axios.post(host, headers, {
    data : 'teste'
  })

  return connect
}