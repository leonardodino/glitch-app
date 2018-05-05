const getArgs = () => {
  const {prefix, p, _: [input]} = require('minimist')(
    process.argv.slice(2), {
      alias: {p: 'prefix'},
      default: {p: '§'},
    }
  )
  return {name: prefix, input}
}
module.exports = callback => {
  const {name, input} = getArgs()
  var data = ''

  if(process.stdin.isTTY && input){
    try{
      data = fs.readFileSync(input, 'utf8')
    }catch(e){
      return callback(e)
    }
    return callback(null, {data, name})
  }

  process.stdin.setEncoding('utf8')
  process.stdin.on('readable', function(){
    var chunk
    while(chunk = process.stdin.read()){data += chunk}
    data = data.replace(/\n$/, '')
  })
  process.stdin.on('end', function (){
    callback(null, {data, name})
  })
}
