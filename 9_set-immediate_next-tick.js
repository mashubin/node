/**
 * Created by web-01 on 2017/11/13.
 */
console.log('start');
setImmediate(()=>{
    console.log('set immediate')
})
process.nextTick(()=>{
    console.log('process nexttick..');
})
console.log('end');