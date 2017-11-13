/**
 * Created by web-01 on 2017/11/13.
 */
const queryString = require('querystring')
// queryString.parse();
let string ='q=hello&u=hello&aq=chorme...';
console.log(queryString.parse(string));