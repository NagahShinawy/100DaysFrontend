const ESTABLISHED = "Connection Establish"
const FAILED = "Connection Failed"


// const prms = new Promise((resolved, rejected) => {
//     let connect = false;
//     if (connect){
//         resolved(ESTABLISHED)
//     }
//     else {
//         rejected(Error(FAILED))
//     }
// }).then(
//     (success) => console.log(`Good, ${success}`),
//     (failed) => console.log(`Failed, ${failed.message}`),
//
// )


const prms = new Promise((resolved, rejected) => {
    let connect = false;
    if (connect){
        resolved(ESTABLISHED)
    }
    else {
        rejected(Error(FAILED))
    }
})

let success = (success) => console.log(`Good, ${success}`)
let failed =  (failed) => console.log(`Failed, ${failed}`)

prms.then(

       success, failed
)


console.log(prms)