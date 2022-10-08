//// data types : null, undefined, number, string, bigint, object, boolean, symbol




// let arr = ["keep", "remove", "keep", "remove", "keep", "remove", "keep", "remove", ]
// function main(x) {
//     let res = []
//     for (let i = 0; i < x.length; i++) {
//         if (i % 2 == 0) {
//             res.push(x[i])
//         }
//     }
    
//     return res
// }
// console.log(arr);
// console.log(main(arr));



/// 2chi masala


function ism(ism) {
    let arr = ism.split(" ")
    let res = []
    for (const suz of arr) {
        res.push(suz.charAt(0).toUpperCase())
    }
    // console.log(res);

    return res.join(".")

}

console.log(ism("sam harris"));


// /// 1chi masala



