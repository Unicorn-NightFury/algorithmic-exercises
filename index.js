const arr = [2, 3, 1, 6, 0, 22, 23, 1, 1];

// const selectSort = (arr) => {
//     const len = arr.length;
//     for (let i = 0; i < len-1; i++) {
//         let minCache = i;
//         for (let j = i+1; j < len; j++) {
//             if (arr[j] < arr[minCache]) {
//                 minCache = j;
//             }
//         }

//         [arr[i], arr[minCache]] = [arr[minCache], arr[i]];

//     }

//     return arr;
// }

// console.log(selectSort(arr));

// function selectionSort(arr) {
//     var len = arr.length;
//     var minIndex, temp;
//     for (var i = 0; i < len - 1; i++) {
//         minIndex = i;
//         for (var j = i + 1; j < len; j++) {
//             if (arr[j] < arr[minIndex]) {     
//                 minIndex = j;                
//             }
//         }
//         temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//     }
//     return arr;
// }

// console.log(selectionSort(arr));

const insetSort = arr => {
    const len = arr.length;
    let pre, 
        current;
    for (let i = 1; i < len; i++) {
        pre = i - 1;
        current = arr[i];

        while (i >= 0 && current < arr[pre]) {
            arr[pre+1] = arr[pre];
            pre--;
        }

        arr[pre+1] = current;
    }

    return arr;
}


console.log(insetSort(arr));