function use(s) {
  code = s
}


// consume

function need(token) {
  if (m = code.match(token))
    return move(m)
  
  throw ''
}


// predict

function peek(...a) {
  let s = code
  let node = keep(...a)
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


// advance

function move(m) {
  v = m[m.length - 1]
  code = code.slice(v.length)
  
  return v
}


module.exports = {
  use,
  need,
  peek,
  skip,
}
