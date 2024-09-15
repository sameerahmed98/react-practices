// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // myArray.pop()
// // myArray.unshift(56)
// // console.log(myArray)

// myArray.map((arr) => {
//     if(arr == 7){
//         console.log('Break');
//         break
//     }
// })

const coding = ['JS', 'PY', 'RUBY', 'JAVA', 'C#']

// const  values = coding.forEach( (item) => { //For each is not return value
//     console.log(item);
// } )

const values = coding.filter( (item) => {
    return item
} )

console.log(values);