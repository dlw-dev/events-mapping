module.exports = async function initialConnection(host, access_token){

  const initial = {
    host : host,
    access_token : access_token,
  }
 
  return initial
}