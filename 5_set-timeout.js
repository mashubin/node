/**
 * Created by web-01 on 2017/11/13.
 */
console.log('start...')
// setTimeout(()=>{
//     console.log('set timeout...')
// },1000)
setImmediate(
    ()=>{
        console.log('set immediate.......')
    }
)
console.log('end......')