s='',n=r=>i=>(m=s.match(r),v=!m||m[2]||m[1]||m[0],(!m||i&&i!=v)?e():(s=s.slice(v.length),v)),h=()=>s,u=c=>s=c,e=()=>{throw'syntax error'};p=(...a)=>(c=h(),o=l(...a),u(c),o),l=(f,...a)=>{let y=h();try{return f(...a)}catch{u(y)}},b=n(/^[\(\)\[\]\,]|^\s*(\->)/),

/*
t=(q,f,r,d) => {
  j=[];
  b(q);
  while(!l(b,d)){
    j.push(f());
    l(b,r)
  };

  return j
};*/


t=(q,f,r,d)=>{j=[];b(q);while(!l(b,d)){j.push(f());l(b,r)};return j};

module.exports=w=>Object.assign(w,{string:n(/^'[^']*'/),number:n(/^(0x[0-9a-fA-F]+|0b[01]+|\d+\.\d+|\d+)/),punc:b,operator:n(/^((and|or|not)(\W|$)|==|!=|<<|>>|<<=|>>=|<=|>=|<|>|\+=|\-=|\*\*=|\*=|\/=|&=|\|=|\^=|=|\+|\-|\*\*|\*|\/|&|\||\^|~|\.|\[|\()/),keyword:n(/^(if|elif|else|while|for|in|def|return|break|continue|end)(?:\W|$)/),ident:n(/^(?:(?!(if|elif|else|while|for|in|def|return|break|continue|end|and|or|not)(\W|$)))[a-zA-Z_][\w_]*/),space:n(/^\s+/),end:n(/^$/),sticky:['=','+=','*=','/=','^=','&=','|=','<<=','>>=','*=','**'],infix:{'=':1,'+=':1,'*=':1,'/=':1,'^=':1,'&=':1,'|=':1,'<<=':1,'>>=':1,'**=':1,'or':2,'and':3,'|':4,'^':5,'&':6,'==':7,'!=':7,'<':8,'>':8,'<=':8,'>=':8,'<<':9,'>>':9,'+':10,'-':10,'/':11,'*':11,'**':12,'(':14,'[':14,'.':14},prefix:{'-':13,'+':13,'~':13,'not':13},fail:e,peek:p,skip:l,some:t,use:u,here:h})
