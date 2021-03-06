function use(s) {
  code = s
}


function peek(...a) {
  let s = code
  let node = skip(...a)
  use(s)

  return node
}


function skip(p, ...a) {
  let s = code

  try {
    return p(...a)
  } catch {
    use(s)
  }
}


function need(token) {
  if (m = code.match(token))
    return move(m)

  fail()
}


function move(m) {
  let v = m.filter(e => e).pop()
  code = code.slice(v.length)

  return v
}


function some(a, p, b, c) {
  let node = []
  a()
  
  while (!skip(c))
    skip(b, node.push(p()))
  
  return node
}


module.exports = {
  use,
  need,
  peek,
  skip,
  some,
  fail
}
