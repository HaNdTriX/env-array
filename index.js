module.exports = function envArray (obj = {}) {
  const common = obj.common || []
  const envOptions = obj[process.env.NODE_ENV] || []
  return common.concat(envOptions)
}
