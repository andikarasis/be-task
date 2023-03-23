function response(resp, code, message, data, error) {
  resp.status(code).send({
    code: code,
    message: message || '',
    data: data || {},
    error: error || null,
  })
}

function makeid(length) {
  var result = ''
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

module.exports = {
  response,
  makeid,
}