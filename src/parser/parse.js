const { use, itch, keep, peek, fail, string, number, punc, operator, keyword, ident, space, end } = require('./lex')
const { prefix, infix, precedence } = require('./precedence')
const 