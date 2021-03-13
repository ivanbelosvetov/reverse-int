module.exports = function reverse (n) {  
  let n2 = Math.abs(n).toString();
return +n2.split("").reverse().join('');
}
